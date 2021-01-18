import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cadastro } from '../shared/cadastro';
import { Observable } from 'rxjs';
import { ConfigParamsService } from './config-params.service';
import { ConfigParams } from '../shared/config-params';
import { Post } from './post';

const url = 'http://localhost:3000/usuarios'
const url2 = 'http://localhost:3000/posts'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient,
              private configService:ConfigParamsService
    ) { }

  salvar(usuario: Cadastro):Observable<Cadastro>{
    return this.http.post<Cadastro>(url,usuario);
  }
  editar(usuario: Cadastro):Observable<Cadastro>{
    return this.http.put<Cadastro>(url + usuario.id, usuario);
  }
  listar(config: ConfigParams):Observable<Cadastro[]>{
    const configParams = this.configService.configurarParametros(config);
    return this.http.get<Cadastro[]>(url,{params: configParams});
  }
  listarPosts():Observable<Post[]>{
    return this.http.get<Post[]>(url2);
  }
  validaLogin(username:String,senha:String):Observable<Cadastro>{
    return this.http.get<Cadastro>(`${url}?email=${username}&password=${senha}`);
  }
  visualizar(id:number):Observable<Cadastro>{
    return this.http.get<Cadastro>(url + id);
  }
  excluir(id:number): Observable<void>{
    return this.http.delete<void>(url+id);
  }
}
