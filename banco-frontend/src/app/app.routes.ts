import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SobreComponent } from "./sobre/sobre.component";
import { ContasComponent } from "./contas/contas.component";
import { ContaDetalheComponent } from "./conta-detalhe/conta-detalhe.component";
import { ContaSucessoComponent } from "./conta-sucesso/conta-sucesso.component";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contas', component: ContasComponent },
    { path: 'contas/:id', component: ContaDetalheComponent },
    { path: 'contas-sucesso', component: ContaSucessoComponent },
    { path: 'sobre', component: SobreComponent }

]