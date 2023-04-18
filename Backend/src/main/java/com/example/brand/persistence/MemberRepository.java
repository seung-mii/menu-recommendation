package com.example.brand.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.brand.model.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, String>{
	Member findByUserID(String userID);
	Boolean existsByUserID(String userID);
	Member findByUserIDAndPassword(String userID, String password);

	@Query("select t from Member t where t.id = ?1")
	List<Member> findByID(String id);
}
