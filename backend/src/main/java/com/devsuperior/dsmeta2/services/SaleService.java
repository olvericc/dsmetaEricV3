package com.devsuperior.dsmeta2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta2.entities.Sale;
import com.devsuperior.dsmeta2.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;
	
	// find all
	public List<Sale> findSales () {
		return repository.findAll();
	}
	
}
