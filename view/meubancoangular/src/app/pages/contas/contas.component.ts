import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/interfaces/conta';
import { ContasService } from 'src/app/services/contas.service';

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

}
