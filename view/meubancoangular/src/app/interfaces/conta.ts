import { Cliente } from "./cliente";

export interface Conta {
  id: number;
  cliente: Cliente;
  agencia: string;
  numero: string;
  saldo: string;
}
