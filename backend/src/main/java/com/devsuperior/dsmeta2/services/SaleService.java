package com.devsuperior.dsmeta2.services;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta2.entities.Sale;
import com.devsuperior.dsmeta2.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;
	
	// find all
	public Page<Sale> findSales (String minDate, String maxDate, Pageable pageable) {
		
		LocalDate min = LocalDate.parse(minDate);
		LocalDate max = LocalDate.parse(maxDate);
		
		return repository.findSales(min, max, pageable);
	}
	
}
