import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component'
import { ROUTES } from './app.routes';
import { ContasComponent } from './contas/contas.component';
import { ContaComponent } from './contas/conta/conta.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    HomeComponent,
    SobreComponent,
    ContasComponent,
    ContaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
