package com.example.brand.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.brand.model.FRestaurantEntity;
import com.example.brand.persistence.FRestaurantRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class FRestaurantService {
	
	@Autowired
	private FRestaurantRepository repository;
	
	public List<FRestaurantEntity> create(final FRestaurantEntity entity) {
		validate(entity);
		repository.save(entity);
		
		return repository.findByM_key(entity.getM_key());
	}
	
	public List<FRestaurantEntity> retrieve(final String r_key) {
		return repository.findByM_key(r_key);
	}
	
	public List<FRestaurantEntity> update(final FRestaurantEntity entity) {
		validate(entity);
		if (repository.existsById(entity.getR_key())) {
			repository.save(entity);
		}
		else
			throw new RuntimeException("Unknown id");
		
		return repository.findByM_key(entity.getM_key());		
	}
	
	public List<FRestaurantEntity> delete(final FRestaurantEntity entity) {
		if(repository.existsById(entity.getR_key()))
			repository.deleteById(entity.getR_key());
		else
			throw new RuntimeException("id does not exist");
		
		return repository.findByM_key(entity.getM_key());
	}
	public void validate(final FRestaurantEntity entity) {
		if(entity == null ) {
			log.warn("Entity cannot be null.");
			throw new RuntimeException("Entity cannot be null.");
		}
		if(entity.getM_key() == null) {
			log.warn("Unknown user.");
			throw new RuntimeException("Unknown user.");
		}
	}
}
