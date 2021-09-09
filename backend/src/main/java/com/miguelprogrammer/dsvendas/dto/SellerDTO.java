package com.miguelprogrammer.dsvendas.dto;

import java.io.Serializable;

import com.miguelprogrammer.dsvendas.entities.Seller;

public class SellerDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String nome;
		
	public SellerDTO() {
	}

	public SellerDTO(Long id, String nome) {
		this.id = id;
		this.nome = nome;
	}

	public SellerDTO(Seller obj) {
		id = obj.getId();
		nome = obj.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	
}
