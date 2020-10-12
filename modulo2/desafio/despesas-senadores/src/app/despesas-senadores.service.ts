import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Senador {
  id: number;
  nomeSenador: string;
  despesas?: [
    {
      tipo: number;
      fornec: string;
      ano: number;
      mes: number;
      dia: number;
      valor: number;
    }
  ];
}

const urlBase = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class DespesasSenadoresService {
  constructor(private http: HttpClient) {}

  senadoresList() {
    return this.http.get<Senador[]>(`${urlBase}/senadores?sort=name`);
  }

  senadoresExpenses(id: number) {
    return this.http.get<Senador>(`${urlBase}/despesasSenadores/${id}`);
  }
}
