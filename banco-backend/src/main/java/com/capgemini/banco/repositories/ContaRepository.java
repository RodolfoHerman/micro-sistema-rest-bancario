package com.capgemini.banco.repositories;

import com.capgemini.banco.models.Conta;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ContaRepository
 */
@Repository
public interface ContaRepository extends JpaRepository<Conta, Long> {

    
}