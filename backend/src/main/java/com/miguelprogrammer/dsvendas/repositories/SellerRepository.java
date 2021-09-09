package com.miguelprogrammer.dsvendas.repositories;

import org.springframework.data.annotation.Persistent;
import org.springframework.data.jpa.repository.JpaRepository;

import com.miguelprogrammer.dsvendas.entities.Seller;

@Persistent
public interface SellerRepository extends JpaRepository<Seller,Long> {

}
