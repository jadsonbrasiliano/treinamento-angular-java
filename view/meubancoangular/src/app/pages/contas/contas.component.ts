import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/interfaces/conta';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {

  contas: Conta[] = [];

  constructor(
    private contasService: ContasService
  ) { }

  ngOnInit(): void {
    this.listarContas();
  }

  listarContas(){
    this.contasService.listarContas().subscribe(contasApi => {
      this.contas = contasApi;
    })
  }

  confirmar(id: number){
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, delete esta conta!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.contasService.remover(id).subscribe(result => {
          Swal.fire(
            'Deletado!',
            'A conta informada foi deletada!',
            'success'
          )
          this.listarContas();
        }, error => {
          console.error(error);
        });
      }
    })
  }
}
