import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenadoresDespesasComponent } from './senadores-despesas/senadores-despesas.component';
import { SenadoresListaComponent } from './senadores-lista/senadores-lista.component';

const routes: Routes = [
  { path: '', redirectTo: '/senadores', pathMatch: 'full' },
  { path: 'senadores', component: SenadoresListaComponent },
  { path: 'despesasSenadores/:id', component: SenadoresDespesasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
