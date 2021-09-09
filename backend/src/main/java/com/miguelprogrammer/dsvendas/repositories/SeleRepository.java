package com.miguelprogrammer.dsvendas.repositories;

import java.util.List;

import org.springframework.data.annotation.Persistent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.miguelprogrammer.dsvendas.dto.SaleSuccessDTO;
import com.miguelprogrammer.dsvendas.dto.SaleSumDTO;
import com.miguelprogrammer.dsvendas.entities.Sale;

@Persistent
public interface SeleRepository extends JpaRepository<Sale,Long> {

	@Query("SELECT new com.miguelprogrammer.dsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount))"
			+ "FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSumDTO> amoutGroupBySeller();
	
	@Query("SELECT new com.miguelprogrammer.dsvendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals))"
			+ "FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSuccessDTO> successGroupBySeller();
}
