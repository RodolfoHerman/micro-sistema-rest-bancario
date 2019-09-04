package com.capgemini.banco.dtos;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Optional;


/**
 * ContaDto
 */
public class ContaDto {

    private Optional<Long> id = Optional.empty();

    private BigDecimal saldo;

    private Optional<Boolean> deposito = Optional.empty();

    private Optional<BigDecimal> valor = Optional.empty();

    private Date dataCriacao;

    private Date dataAtualizacao;

    public Optional<Long> getId() {
        return this.id;
    }

    public void setId(Optional<Long> id) {
        this.id = id;
    }

    public BigDecimal getSaldo() {
        return this.saldo;
    }

    public void setSaldo(BigDecimal saldo) {
        this.saldo = saldo;
    }

    public Optional<Boolean> getDeposito() {
        return this.deposito;
    }

    public void setDeposito(Optional<Boolean> deposito) {
        this.deposito = deposito;
    }

    public Optional<BigDecimal> getValor() {
        return this.valor;
    }

    public void setValor(Optional<BigDecimal> valor) {
        this.valor = valor;
    }


    public Date getDataCriacao() {
        return this.dataCriacao;
    }

    public void setDataCriacao(Date dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public Date getDataAtualizacao() {
        return this.dataAtualizacao;
    }

    public void setDataAtualizacao(Date dataAtualizacao) {
        this.dataAtualizacao = dataAtualizacao;
    }
    
}