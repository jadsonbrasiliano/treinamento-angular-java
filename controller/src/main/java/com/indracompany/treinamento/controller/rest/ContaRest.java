package com.indracompany.treinamento.controller.rest;

import com.indracompany.treinamento.exception.AplicacaoException;
import com.indracompany.treinamento.model.entity.Conta;
import com.indracompany.treinamento.model.service.ContaService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rest/contas")
public class ContaRest extends GenericCrudRest<Conta, Long, ContaService> {

//	"/consultar-saldo/{agencia}/{conta}"
//	"/consultar-contas-cliente/{cpf}"
//	"/deposito"
//	"/saque"

	@Autowired
	private ContaService contaService;
	
	@RequestMapping(value = "/consultar-saldo/{agencia}/{conta}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Double> consultarSaldo(final @PathVariable String agencia,
			@PathVariable String conta) throws AplicacaoException {
		Double saldo = contaService.consultarSaldo(agencia, conta);
		return new ResponseEntity<>(saldo, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/consultar-contas-cliente/{cpf}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<List<Conta>> consultarContas(@PathVariable String cpf) throws AplicacaoException {
		List<Conta> contasCliente = contaService.consultarContasCliente(cpf);
		return new ResponseEntity<>(contasCliente, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/deposito", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Void> depositar(@PathVariable String agencia, @PathVariable String numero,
			@PathVariable Double valor) throws AplicacaoException {
		contaService.depositar(agencia, numero, valor);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "/saque", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Void> sacar(@PathVariable String agencia, @PathVariable String numero,
			@PathVariable Double valor) throws AplicacaoException {
		contaService.sacar(agencia, numero, valor);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
