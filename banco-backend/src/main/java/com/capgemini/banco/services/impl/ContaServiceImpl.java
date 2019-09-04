package com.capgemini.banco.services.impl;

import java.util.List;
import java.util.Optional;

import com.capgemini.banco.models.Conta;
import com.capgemini.banco.repositories.ContaRepository;
import com.capgemini.banco.services.ContaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * ContaServiceImpl
 */
@Service
public class ContaServiceImpl implements ContaService {

    @Autowired
    private ContaRepository contaRepository;

    @Override
    public Optional<Conta> buscarPorId(Long id) {
        
        return this.contaRepository.findById(id);
    }

    @Override
    public Conta persistir(Conta conta) {
        
        return this.contaRepository.save(conta);
    }

    @Override
    public List<Conta> buscar() {
        
        return this.contaRepository.findAll();
    }

}