package com.example.brand.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.brand.model.PostEntity;
import com.example.brand.persistence.PostRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class PostService {
	
	@Autowired
	private PostRepository repository;
	
	public List<PostEntity> create(final PostEntity entity) {
		//Validations
		validate(entity);
		repository.save(entity);
		//return repository.findById(entity.getP_key());
		return repository.findByR_key(entity.getR_key());
	}
	
	public List<PostEntity> retrieve(final String r_key) {
		return repository.findByR_key(r_key);
	}
	
	public List<PostEntity> retrieveAll(final String r_key) {
		return repository.findByR_keyAll(r_key);
	}
	
	public List<PostEntity> update(final PostEntity entity) {
		//Validations
		validate(entity);
		if (repository.existsById(entity.getP_key())) {
			repository.save(entity);
		}
		else
			throw new RuntimeException("Unknown id");
		
		//return repository.findById(entity.getP_key());
		return repository.findByR_key(entity.getR_key());		
	}
	
	public List<PostEntity> delete(final PostEntity entity) {
		if(repository.existsById(entity.getP_key()))
			repository.deleteById(entity.getP_key());
		else
			throw new RuntimeException("id does not exist");
		
		return repository.findByR_key(entity.getR_key());
	}
	public void validate(final PostEntity entity) {
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
