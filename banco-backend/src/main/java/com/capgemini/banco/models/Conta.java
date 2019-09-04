package com.capgemini.banco.models;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

/**
 * Conta
 */
@Entity
@Table(name = "conta")
public class Conta implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "saldo")
    private BigDecimal saldo;

    @Column(name = "data_criacao")
    private Date dataCriacao;

    @Column(name = "data_atualizacao")
    private Date dataAtualizacao;

    public Conta() {}

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getSaldo() {
        return this.saldo;
    }

    public void setSaldo(BigDecimal saldo) {
        this.saldo = saldo;
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

    @PreUpdate
    public void preUpdate() {

        this.dataAtualizacao = new Date();
    }

    @PrePersist
    public void prePersist() {

        final Date atual = new Date();
        this.dataCriacao = atual;
        this.dataAtualizacao = atual;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Conta)) {
            return false;
        }
        Conta conta = (Conta) o;
        return Objects.equals(id, conta.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

}