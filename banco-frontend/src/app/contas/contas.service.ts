import { Conta } from "./conta/conta.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BANCO_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Response } from "./response.model";

@Injectable()
export class ContasService {

    constructor(private http: HttpClient) {}

    contas(): Observable<Response> {

        return this.http.get<Response>(`${BANCO_API}/contas`);

    }

    contaPorId(id: string): Observable<Response> {

        return this.http.get<Response>(`${BANCO_API}/contas/${id}`);
    }

    atualizar(conta: Conta): Observable<any> {

        return this.http.put<Conta>(`${BANCO_API}/contas/${conta.id}`, conta);
    }

}