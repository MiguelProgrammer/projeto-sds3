package com.miguelprogrammer.dsvendas.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miguelprogrammer.dsvendas.dto.SellerDTO;
import com.miguelprogrammer.dsvendas.entities.Seller;
import com.miguelprogrammer.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {

	@Autowired
	private SellerRepository sellerRepository;
	
	public List<SellerDTO> findAll(){
		List<Seller> list = sellerRepository.findAll();
		return list.stream().map(obj -> new SellerDTO(obj)).collect(Collectors.toList());
	}
	
}
