package com.capgemini.banco.services;

import java.util.Optional;

import com.capgemini.banco.models.Conta;

/**
 * ContaService
 */
public interface ContaService {

    /**
     * Busca e retornar uma conta dado um id
     * @param id
     * @return Optional<Conta>
     */
    Optional<Conta> buscarPorId(Long id);

    /**
     * Persistir uma conta na base de dados
     * @param conta
     * @return Conta
     */
    Conta persistir(Conta conta);

}