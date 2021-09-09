package com.miguelprogrammer.dsvendas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.miguelprogrammer.dsvendas.dto.SaleDTO;
import com.miguelprogrammer.dsvendas.dto.SaleSuccessDTO;
import com.miguelprogrammer.dsvendas.dto.SaleSumDTO;
import com.miguelprogrammer.dsvendas.entities.Sale;
import com.miguelprogrammer.dsvendas.repositories.SeleRepository;
import com.miguelprogrammer.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {

	@Autowired
	private SeleRepository saleRepository;
	
	@Autowired
	private SellerRepository selerRepository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable){
		selerRepository.findAll();
		Page<Sale> list = saleRepository.findAll(pageable);
		return list.map(obj -> new SaleDTO(obj));
	}

	@Transactional(readOnly = true)
	public List<SaleSumDTO> amoutGroupBySeller(){
		return saleRepository.amoutGroupBySeller();
	}

	@Transactional(readOnly = true)
	public List<SaleSuccessDTO> successGroupBySeller(){
		return saleRepository.successGroupBySeller();
	}
	
}
