package com.capgemini.banco.controllers;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.capgemini.banco.dtos.ContaDto;
import com.capgemini.banco.models.Conta;
import com.capgemini.banco.response.Response;
import com.capgemini.banco.services.ContaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * ContaController
 */
@RestController
@RequestMapping("/contas")
@CrossOrigin(origins = "*")
public class ContaController {

    @Autowired
    private ContaService contaService;

    /**
     * Busca e retorna a lista de contas no banco de dados
     * @return ResponseEntity<Response<List<ContaDto>>>
     */
    @GetMapping
    public ResponseEntity<Response<List<ContaDto>>> buscar() {

        Response<List<ContaDto>> response = new Response<>();

        List<Conta> contas = this.contaService.buscar();
        List<ContaDto> contaDtos = contas.stream().map(conta -> this.converterParaContaDto(conta))
                .collect(Collectors.toList());

        response.setData(contaDtos);

        return ResponseEntity.ok(response);
    }

    /**
     * Busca e retorna a conta com o id informado
     * @param id
     * @return ResponseEntity<Response<ContaDto>>
     */
    @GetMapping(value = "/{id}")
    public ResponseEntity<Response<ContaDto>> buscarPeloId(@PathVariable("id") Long id) {

        Response<ContaDto> response = new Response<>();

        Optional<Conta> conta = this.contaService.buscarPorId(id);

        if (!conta.isPresent()) {

            response.getErrors().add("Registro não encontrado para o ID : " + id);

            return ResponseEntity.badRequest().body(response);
        }

        response.setData(this.converterParaContaDto(conta.get()));

        return ResponseEntity.ok(response);
    }

    /**
     * Busca e atualiza a conta com o id informado
     * @param id
     * @param contaDto
     * @param result
     * @return ResponseEntity<Response<ContaDto>>
     */
    @PutMapping(value = "/{id}")
    public ResponseEntity<Response<ContaDto>> atualizar(@PathVariable("id") Long id,
            @RequestBody ContaDto contaDto, BindingResult result) {

        Response<ContaDto> response = new Response<>();

        Optional<Conta> conta = this.contaService.buscarPorId(id);

        if (!conta.isPresent()) {

            result.addError(new ObjectError("Conta", "Conta não encontrada"));

        } else {

            this.atualizarDadosDaConta(conta.get(), contaDto, result);
        }

        if (result.hasErrors()) {

            result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
            return ResponseEntity.badRequest().body(response);
        }

        this.contaService.persistir(conta.get());
        response.setData(this.converterParaContaDto(conta.get()));

        return ResponseEntity.ok(response);
    }

    /**
     * Método responsável por transformar um objeto do tipo Conta para o objeto
     * ContaDto
     * 
     * @param conta
     * @return ContaDto
     */
    private ContaDto converterParaContaDto(Conta conta) {

        ContaDto contaDto = new ContaDto();

        contaDto.setId(Optional.ofNullable(conta.getId()));
        contaDto.setSaldo(conta.getSaldo());
        contaDto.setDataCriacao(conta.getDataCriacao());
        contaDto.setDataAtualizacao(conta.getDataAtualizacao());

        return contaDto;
    }

    /**
     * Realiza a validação e atualização da conta
     * @param conta
     * @param contaDto
     * @param result
     */
    private void atualizarDadosDaConta(Conta conta, ContaDto contaDto, BindingResult result) {

        if (contaDto.getDeposito().isPresent()) {

            if (contaDto.getDeposito().get()) {

                contaDto.getValor().ifPresentOrElse(valor -> conta.deposito(valor),
                        () -> result.addError(new ObjectError("valor", "Valor de depósito deve ser informado")));

            } else {

                contaDto.getValor().ifPresentOrElse(valor -> conta.saque(valor),
                        () -> result.addError(new ObjectError("valor", "Valor de saque deve ser informado")));

                if (conta.getSaldo().doubleValue() < 0) {

                    result.addError(new ObjectError("valor", "Valor de saque não disponível. Saldo atual R$".concat(contaDto.getSaldo().toString())));
                }
            }
        } else {

            result.addError(new ObjectError("operacao", "Necessário informar o tipo de operação (Depósito ou Saque)"));
        }

    }

}