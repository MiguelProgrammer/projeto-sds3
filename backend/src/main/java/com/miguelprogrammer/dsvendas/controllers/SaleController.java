package com.miguelprogrammer.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.miguelprogrammer.dsvendas.dto.SaleDTO;
import com.miguelprogrammer.dsvendas.dto.SaleSuccessDTO;
import com.miguelprogrammer.dsvendas.dto.SaleSumDTO;
import com.miguelprogrammer.dsvendas.service.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

	@Autowired
	private SaleService saleService;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
		Page<SaleDTO> list = saleService.findAll(pageable);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "/amount-by-seller")
	public ResponseEntity<List<SaleSumDTO>> amoutGroupBySeller(){
		List<SaleSumDTO> list = saleService.amoutGroupBySeller();
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "/success-by-seller")
	public ResponseEntity<List<SaleSuccessDTO>> successGroupBySeller(){
		List<SaleSuccessDTO> list = saleService.successGroupBySeller();
		return ResponseEntity.ok(list);
	}
}
