package com.example.brand.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.brand.model.Member;
import com.example.brand.persistence.MemberRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class MemberService {
	@Autowired
	private MemberRepository MemberRepository;

	public Member create(final Member Member) {
		if (Member == null || Member.getUserID() == null) {
			throw new RuntimeException("Invalid arguments");
		}
		final String userID = Member.getUserID();
		if (MemberRepository.existsByUserID(userID)) {
			log.warn("userID already exists {}", userID);
			throw new RuntimeException("userID already exists");
		}

		return MemberRepository.save(Member);
	}

	public Member getByCredentials(final String userID, final String password, final PasswordEncoder encoder) {
		final Member originalUser = MemberRepository.findByUserID(userID);

		if (originalUser != null && encoder.matches(password, originalUser.getPassword())) {
			return originalUser;
		}

		return null;
	}
}
