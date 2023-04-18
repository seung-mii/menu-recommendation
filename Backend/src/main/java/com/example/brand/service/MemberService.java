package com.example.brand.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.brand.dto.MemberDTO;
import com.example.brand.model.FRestaurantEntity;
import com.example.brand.model.Member;
import com.example.brand.persistence.MemberRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class MemberService {
	@Autowired
	private MemberRepository MemberRepository;
	
	public Member create(final Member Member) {
		if(Member == null || Member.getUserID() == null) {
			throw new RuntimeException("Invalid arguments");
		}
		final String email = Member.getUserID();
		if(MemberRepository.existsByUserID(email)) {
			log.warn("Email already exists {}",email);
			throw new RuntimeException("Email already exists");
		}
		
		return MemberRepository.save(Member);
	}
	
	public Member getByCredentials(final String userID, final String password, final PasswordEncoder encoder) {
		final Member originalUser = MemberRepository.findByUserID(userID);
		
		if(originalUser != null && encoder.matches(password, originalUser.getPassword())) {
			return originalUser;
		}
		
		return null;
	}

	public List<Member> retrieve(final String id) {
		return MemberRepository.findByID(id);
	}
	
	public List<Member> update(final Member entity) {
		validate(entity);
		if (MemberRepository.existsById(entity.getM_key())) {
			MemberRepository.save(entity);
		}
		else
			throw new RuntimeException("Unknown id");
		
		//return repository.findById(entity.getM_key());
		return MemberRepository.findByID(entity.getM_key());		
	}
	
	public List<Member> delete(final Member entity) {
		validate(entity);
		if (MemberRepository.existsById(entity.getM_key())) {
			MemberRepository.deleteById(entity.getM_key());
		}
		else
			throw new RuntimeException("Unknown id");
		
		return MemberRepository.findByID(entity.getM_key());		
	}

	public void validate(final Member entity) {
		if(entity == null ) {
			log.warn("Entity cannot be null.");
			throw new RuntimeException("Entity cannot be null.");
		}
		if(entity.getUserID() == null) {
			log.warn("Unknown user.");
			throw new RuntimeException("Unknown user.");
		}
	}
}
