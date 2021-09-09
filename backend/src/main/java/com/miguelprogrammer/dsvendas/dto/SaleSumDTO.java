package com.miguelprogrammer.dsvendas.dto;

import java.io.Serializable;

import com.miguelprogrammer.dsvendas.entities.Seller;

public class SaleSumDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String SellerName;
	private Double sum;
	
	
	public SaleSumDTO(Seller sellerName, Double sum) {
		this.SellerName = sellerName.getName();
		this.sum = sum;
	}
	
	public String getSellerName() {
		return SellerName;
	}
	
	public void setSellerName(String sellerName) {
		SellerName = sellerName;
	}
	
	public Double getSum() {
		return sum;
	}
	
	public void setSum(Double sum) {
		this.sum = sum;
	}
	
}
