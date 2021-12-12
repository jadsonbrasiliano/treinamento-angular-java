import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-edicao-contas',
  templateUrl: './cadastro-edicao-contas.component.html',
  styleUrls: ['./cadastro-edicao-contas.component.css']
})
export class CadastroEdicaoContasComponent implements OnInit {

  // idCliente = new FormControl('', Validators.required);
  // cliente: Cliente = this.clientesService.pegarPorId(this.idCliente.value);

  clienteForm: FormGroup = new FormGroup({
    id: new FormControl(496),
    nome: new FormControl("teste"),
    cpf: new FormControl("11041252420"),
    email: new FormControl("teste@teste0"),
    observacoes: new FormControl("teste0"),
    ativo: new FormControl(true),
  })

  cliente: Cliente = this.clienteForm.value;

  formGroup: FormGroup = new FormGroup({
    id: new FormControl(null),
    cliente: new FormControl(this.cliente),
    agencia: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    saldo: new FormControl('', Validators.required),
  });

  constructor(
    private contasService: ContasService,
    private clientesService: ClientesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  enviar(){
    const conta = this.formGroup.value;
    this.contasService.cadastrar(conta).subscribe(contasAPI => {
      Swal.fire("Cadastrado", "Cadastrado com sucesso!", "success");
      this.router.navigate(['/contas'])
    }, error => {
      console.log(error);
    });
  }

}
