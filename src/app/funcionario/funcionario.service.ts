import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Funcionario } from './funcionario';
  
@Injectable({providedIn: 'root'})
export class FuncionarioService {
   
    baseUrl: String = `${environment.api}/funcionario`;
  
    constructor(private http: HttpClient) {}

    findAll():Observable<Funcionario[]>{
        const url = `${this.baseUrl}`;
        return this.http.get<Funcionario[]>(url);
    }

    findById(funcionario: Funcionario):Observable<Funcionario[]>{
        const url = `${this.baseUrl}/${funcionario.id}`;
        return this.http.get<Funcionario[]>(url);
    }

    save(funcionario: Funcionario):Observable<Funcionario>{
        const url = `${this.baseUrl}`;
        return this.http.post<Funcionario>(url, funcionario);
    }

    update(funcionario: Funcionario):Observable<Funcionario>{
        const url = `${this.baseUrl}/${funcionario.id}`;
        return this.http.put<Funcionario>(url, funcionario);
    }

    delete(funcionario: Funcionario):Observable<void>{
        const url = `${this.baseUrl}/${funcionario.id}`;
        return this.http.delete<void>(url);
    }

    getCount():Observable<void>{
        const url = `${this.baseUrl}/count`;
        return this.http.get<void>(url);
    }
   
}