package com.devsuperior.dsmeta2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmeta2.entities.Sale;

public interface SaleRepository extends JpaRepository <Sale, Long> {
}
