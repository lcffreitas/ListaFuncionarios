import { Funcionario } from './../models/Funcionarios';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';


@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  private apiUrl = `${environment.ApiUrl}/Funcionario`

  constructor( private http: HttpClient ) { }

  GetFuncionarios() : Observable<Response<Funcionario[]>> {
    return this.http.get<Response<Funcionario[]>>(this.apiUrl);
  }

  GetFuncionarioById(id : number) : Observable<Response<Funcionario>> {
      return this.http.get<Response<Funcionario>>(`${this.apiUrl}/${id}`);
    }

  CreateFuncionario(funcionario : Funcionario) : Observable<Response<Funcionario[]>> {
    return this.http.post<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario);
  }

  EditFuncionario(funcionario : Funcionario) : Observable<Response<Funcionario[]>> {
    return this.http.put<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario);
  }

  InativaFuncionario(id: number) : Observable<Response<Funcionario[]>> {
    return this.http.put<Response<Funcionario[]>>(`${this.apiUrl}/InativaFuncionario/${id}`, id);
  }

  Excluirfuncionario(id: number) : Observable<Response<Funcionario[]>> {
    return this.http.delete<Response<Funcionario[]>>(`${this.apiUrl}?id=${id}`);
  }
}
