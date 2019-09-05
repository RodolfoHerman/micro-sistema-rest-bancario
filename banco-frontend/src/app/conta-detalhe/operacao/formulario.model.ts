export class Formulario {

    private valor: number;
    private optionOperacao: string;

    constructor(dados: any) {

        this.valor = dados.valor;
        this.optionOperacao = dados.optionOperacao;
    }

    getValor(): number {

        return this.valor;
    }

    isDeposito(): boolean {

        return this.optionOperacao == "DEP" ? true : false;
    }
}