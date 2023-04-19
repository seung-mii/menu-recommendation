package com.example.brand.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.brand.model.FRestaurantEntity;

@Repository
public interface FRestaurantRepository extends JpaRepository<FRestaurantEntity,String>{

	@Query("select t from FRestaurantEntity t")
	List<FRestaurantEntity> findByM_key(String m_key);
}