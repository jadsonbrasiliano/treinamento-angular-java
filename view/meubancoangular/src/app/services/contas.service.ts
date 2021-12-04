import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Conta } from '../interfaces/conta';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  api = `${environment.api}/contas/`;

  constructor(
    private http: HttpClient
  ) { }

  listarContas(){
    return this.http.get<Conta[]>(this.api)
  }
}
