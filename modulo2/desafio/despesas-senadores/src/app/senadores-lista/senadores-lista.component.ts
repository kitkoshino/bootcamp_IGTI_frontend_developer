import { Component, OnInit } from '@angular/core';
import {
  DespesasSenadoresService,
  Senador,
} from '../despesas-senadores.service';

@Component({
  selector: 'app-senadores-lista',
  templateUrl: './senadores-lista.component.html',
  styleUrls: ['./senadores-lista.component.scss'],
})
export class SenadoresListaComponent implements OnInit {
  senadores: Senador[];

  constructor(private despesasService: DespesasSenadoresService) {}

  ngOnInit(): void {
    this.despesasService.senadoresList().subscribe((senadores) => {
      this.senadores = senadores;
    });
  }
}
