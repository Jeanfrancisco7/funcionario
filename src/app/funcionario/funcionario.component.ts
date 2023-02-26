import { FuncionarioService } from './funcionario.service';
import { OnInit, Component } from '@angular/core';
import { Funcionario } from './funcionario';


@Component({
    selector: 'app-home',
    templateUrl: './funcionario.component.html',
    styleUrls: ['./funcionario.component.css']
})

export class FuncionarioComponent implements OnInit{
   
    objeto: Funcionario = new Funcionario();
    listaFuncioarios :Funcionario[]=[];
    mensagem:string = "";
    error: any;
    registros: any;


    constructor(private service: FuncionarioService){}
    ngOnInit(): void {
        this.findAll();
    }

    findAll(){
        this.service.findAll().subscribe(response =>{
            this.listaFuncioarios = response;
            this.objeto = new Funcionario();
            this.getCount();
        });
    }

    getCount(){
        this.service.getCount().subscribe(response =>{
            this.registros = response;
        });
    }


    save(objeto: Funcionario){
        if (objeto.id){
            this.service.update(objeto).subscribe(response =>{
                this.findAll();
                this.mensagem = "Salvo com sucesso!"
            }, (error)=>{
                this.mensagem = (error.error.message) ? error.error.message: error.error[0].erro + " campo: "+error.error[0].campo;
            });
        }else{
            this.service.save(objeto).subscribe(response =>{
                this.findAll();
                this.mensagem = "Salvo com sucesso!"
            }, (error)=>{
                this.error = error; 
                this.mensagem = (error.error.message) ? error.error.message: error.error[0].erro + " campo: "+error.error[0].campo;
            });
        }
    }

    edit(objeto: Funcionario){
        this.objeto = objeto;
    }

    delete(objeto: Funcionario){
        this.service.delete(objeto).subscribe(response =>{
            this.findAll();
        });
    }
}