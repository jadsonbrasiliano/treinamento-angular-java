package com.indracompany.treinamento.model.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "operacoes")
@Data
@EqualsAndHashCode(callSuper = true)
public class Operacao extends GenericEntity<Long>{
	
	private static final long serialVersionUID = -1822096246678242153L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(length = 19, nullable = false)
	private LocalDateTime dataHora;
	
	@Column(length = 1, nullable = false)
	private char tpOperacao;
	
	@Column(length = 22, nullable = false)
	private Double valor;
	
	@Column(length = 100)
	private String observacao;
	
	@ManyToOne
	@JoinColumn(name = "fk_conta_id")
	private Conta conta;
}
