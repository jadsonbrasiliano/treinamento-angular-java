import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SaqueDeposito } from 'src/app/interfaces/saque-deposito';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required)
  });

  constructor(
    private contasService: ContasService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sacar(){
    const sacar: SaqueDeposito = this.formGroup.value;
    this.contasService.sacar(sacar).subscribe(sacarAPI => {
      Swal.fire("Sacado!", "Houve uma mudança na sua conta!", "success");
      this.router.navigate(["/contas"])
    }, error => {
      console.log(error);
    });
  }
}
