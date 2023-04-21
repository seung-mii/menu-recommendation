package com.example.brand.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.brand.model.Member;
import com.example.brand.model.StarEntity;

@Repository
public interface StarRepository extends JpaRepository<StarEntity,String>{

	@Query("select t from StarEntity t")
	List<StarEntity> findByR_key(String r_key);
	

	@Query("select t from StarEntity t where t.r_key = ?1")
	List<StarEntity> findByR_keyOne(String r_key);
}