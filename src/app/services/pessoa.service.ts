import { Injectable } from '@angular/core'
import { Pessoa } from '../models/pessoa.model'

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PessoaService {

  private url: string = 'http://localhost:3005/pessoas'

  constructor(private _http: Http) {}

  public listar(): Observable<Pessoa[]> {
    return this._http.get(this.url)
      .map(res => res.json());
  }

  public carregar(id: number): Observable<Pessoa> {
    return this._http.get(`${this.url}/${id}`)
      .map(res => res.json());
  }

  public inserir(pessoa: Pessoa): Observable<Pessoa> {
    console.log(pessoa);
    return this._http.post(this.url, JSON.stringify({
      nome: pessoa.nome,
      cpf: pessoa.cpf,
      email: pessoa.email,
      telefone: pessoa.telefone, 
      descricao: pessoa.descricao
    }), new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })).map(res => res.json());
  }

  public alterar(id: number, pessoa: Pessoa): Observable<Pessoa> {
    return this._http.put(`${this.url}/${id}`, JSON.stringify({
      nome: pessoa.nome,
      cpf: pessoa.cpf,
      email: pessoa.email,
      telefone: pessoa.telefone,
      descricao: pessoa.descricao
    }), new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })).map(res => res.json());
  }

  public delete(id: number): Observable<number> {
    return this._http.delete(`${this.url}/${id}`)
      .map(success => success.status);
  }

}
