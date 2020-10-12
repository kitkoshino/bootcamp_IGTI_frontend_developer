import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  DespesasSenadoresService,
  Senador,
} from '../despesas-senadores.service';

@Component({
  selector: 'app-senadores-despesas',
  templateUrl: './senadores-despesas.component.html',
  styleUrls: ['./senadores-despesas.component.scss'],
})
export class SenadoresDespesasComponent implements OnInit {
  id: number;
  senador: Senador;
  expenses: {
    id: number;
    description: string;
    total: number;
  }[];

  constructor(
    private route: ActivatedRoute,
    private despesasService: DespesasSenadoresService
  ) {}

  ngOnInit(): void {
    this.expenses = [
      {
        id: 1,
        description: 'Aluguel de imóveis e despesas concernentes a eles.',
        total: 0,
      },
      {
        id: 2,
        description: 'Divulgação da atividade parlamentar',
        total: 0,
      },
      {
        id: 3,
        description: 'Aquisição de material de consumo para uso no escritório',
        total: 0,
      },
      {
        id: 4,
        description: 'Passagens aéreas,aquáticas e terrestres nacionais',
        total: 0,
      },
      {
        id: 5,
        description:
          'Contratação de consultorias,assessorias,pesquisas,trabalhos técnicose outros serviços',
        total: 0,
      },
      {
        id: 6,
        description: 'Locomoção,hospedagem,alimentação e combustíveis.',
        total: 0,
      },
      {
        id: 7,
        description: 'Serviços de Segurança Privada',
        total: 0,
      },
    ];

    this.route.paramMap.subscribe((paramMap) => {
      this.id = parseInt(paramMap.get('id'));
      this.despesasService.senadoresExpenses(this.id).subscribe((senador) => {
        this.senador = senador;
        senador.despesas.forEach((despesa) => {
          const expense = this.expenses.find((exp) => exp.id === despesa.tipo);
          expense.total += despesa.valor;
        });
      });
    });
  }

  getExpenseDescription(expenseType: number) {
    return this.expenses.find(expense => expense.id === expenseType)?.description;
  }

  getTotalExpenses() {
     return this.expenses.reduce((acc, expense) => {
      return acc + expense.total;
    }, 0);
  }
}
