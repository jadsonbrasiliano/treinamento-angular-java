import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Conta } from '../interfaces/conta';
import { SaqueDeposito } from '../interfaces/saque-deposito';
import { Transferencia } from '../interfaces/transferencia';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  api = `${environment.api}/contas/`;

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(conta: Conta) {
    return this.http.post(this.api, conta);
  }

  remover(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
  
  listarContas(){
    return this.http.get<Conta[]>(this.api)
  }

  sacar(saque: SaqueDeposito){
    return this.http.post(`${this.api}/saque`, saque);
  }

  deposito(deposito: SaqueDeposito){
    return this.http.post(`${this.api}/deposito`, deposito);
  }

  transferencia(transferencia: Transferencia){
    return this.http.post(`${this.api}/transferencia`, transferencia)
  }
}
