import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-clientes-cadastrar',
  templateUrl: './clientes-cadastrar.component.html',
  styleUrls: ['./clientes-cadastrar.component.css']
})
export class ClientesCadastrarComponent implements OnInit {

  checkOutForm = this.formBuilder.group({
    nome: '',
    cpf: '',
    email: '',
    obs: ''
  });

  @Input()
  alert: boolean = false;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Processar a saída aqui
    console.warn("Seus dados foram enviados!",
    this.checkOutForm.value);
    this.checkOutForm.reset();
  }
}
