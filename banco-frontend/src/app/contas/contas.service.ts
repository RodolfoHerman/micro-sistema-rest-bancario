import { Conta } from "./conta/conta.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BANCO_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class ContasService {

    constructor(private http: Http) {}

    contas(): Observable<Array<Conta>> {

        return this.http.get(`${BANCO_API}/contas`)
            .map(response => response.json().data);

    }

    contaPorId(id: string): Observable<Conta> {

        return this.http.get(`${BANCO_API}/contas/${id}`)
            .map(response => response.json().data);
    }

}