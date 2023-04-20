package com.example.brand.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.brand.model.PostEntity;

@Repository
public interface PostRepository extends JpaRepository<PostEntity,String>{

	@Query("select t from PostEntity t where t.r_key = ?1")
	List<PostEntity> findByR_key(String r_key);
	

	@Query("select t from PostEntity t")
	List<PostEntity> findByR_keyAll(String r_key);
}