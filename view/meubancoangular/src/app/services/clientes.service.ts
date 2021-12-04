import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  api = `${environment.api}/clientes/`;

  constructor(
    private http: HttpClient
  ) { }

  listarTodosClientes() {
    return this.http.get<Cliente[]>(this.api);
  }

  cadastrar(cliente: Cliente) {
    return this.http.post<Cliente>(this.api, cliente);
  }

  remover(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
