package com.example.brand.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.brand.model.StarEntity;
import com.example.brand.persistence.StarRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class StarService {
	
	@Autowired
	private StarRepository repository;
	
	public List<StarEntity> create(final StarEntity entity) {
		//Validations
		validate(entity);
		repository.save(entity);
		//return repository.findById(entity.getId());
		return repository.findByR_key(entity.getR_key());
	}
	
	public List<StarEntity> retrieve(final String star) {
		return repository.findByR_key(star);
	}
	
	public List<StarEntity> retrieveOne(final String star) {
		return repository.findByR_keyOne(star);
	}
	
	public List<StarEntity> update(final StarEntity entity) {
		//Validations
		validate(entity);
		if (repository.existsById(entity.getS_key())) {
			repository.save(entity);
		}
		else
			throw new RuntimeException("Unknown id");
		
		//return repository.findById(entity.getId());
		return repository.findByR_key(entity.getR_key());		
	}
	
	public List<StarEntity> delete(final StarEntity entity) {
		if(repository.existsById(entity.getS_key()))
			repository.deleteById(entity.getS_key());
		else
			throw new RuntimeException("id does not exist");

		return repository.findByR_key(entity.getR_key());
	}
	public void validate(final StarEntity entity) {
		if(entity == null ) {
			log.warn("Entity cannot be null.");
			throw new RuntimeException("Entity cannot be null.");
		}
		if(entity.getR_key() == null) {
			log.warn("Unknown user.");
			throw new RuntimeException("Unknown user.");
		}
	}
}
