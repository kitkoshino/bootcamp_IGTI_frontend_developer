import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenadoresListaComponent } from './senadores-lista/senadores-lista.component';
import { SenadoresDespesasComponent } from './senadores-despesas/senadores-despesas.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table'; 
import{registerLocaleData}from'@angular/common';
import localePt from'@angular/common/locales/pt';
import {LOCALE_ID} from '@angular/core';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    SenadoresListaComponent,
    SenadoresDespesasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
