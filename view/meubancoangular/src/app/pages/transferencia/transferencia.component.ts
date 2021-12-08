import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/interfaces/transferencia';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    agenciaDestino: new FormControl('', Validators.required),
    agenciaOrigem: new FormControl('', Validators.required),
    numeroContaDestino: new FormControl('', Validators.required),
    numeroContaOrigem: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
  });

  constructor(
    private contasService: ContasService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  transferir(){
    const transferencia: Transferencia = this.formGroup.value;
    this.contasService.transferencia(transferencia).subscribe(transferencia => {
      Swal.fire("Transferido!", "Houve uma mudança na sua conta!", "success");
      this.router.navigate(["/contas"])
    }, error => {
      console.log(error);
    });
  }
}
