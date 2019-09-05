import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component'
import { ROUTES } from './app.routes';
import { ContasComponent } from './contas/contas.component';
import { ContaComponent } from './contas/conta/conta.component';
import { ContasService } from './contas/contas.service';
import { ContaDetalheComponent } from './conta-detalhe/conta-detalhe.component';
import { OperacaoComponent } from './conta-detalhe/operacao/operacao.component';
import { RadioComponent } from './compartilhado/radio/radio.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    HomeComponent,
    SobreComponent,
    ContasComponent,
    ContaComponent,
    ContaDetalheComponent,
    OperacaoComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ContasService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
