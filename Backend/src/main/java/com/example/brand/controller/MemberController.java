package com.example.brand.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.brand.dto.ResponseDTO;
import com.example.brand.dto.MemberDTO;
import com.example.brand.model.Member;
import com.example.brand.service.MemberService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/auth")
public class MemberController {
	@Autowired
	private MemberService MemberService;

	private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody MemberDTO MemberDTO) {
		try {
			Member user = Member.builder()
					.name(MemberDTO.getName())
					.userID(MemberDTO.getUserID())
					.password(passwordEncoder.encode(MemberDTO.getPassword()))
					.phone(MemberDTO.getPhone())
					.nickname(MemberDTO.getNickname())
					.build();

			Member registeredUser = MemberService.create(user);
			MemberDTO responseMemberDTO = MemberDTO.builder()
					.m_key(registeredUser.getM_key())
					.name(registeredUser.getName())
					.userID(registeredUser.getUserID())
					.phone(registeredUser.getPhone())
					.nickname(registeredUser.getNickname())
					.build();
			return ResponseEntity.ok().body(responseMemberDTO);
		} catch (Exception e) {
			ResponseDTO responseDTO = ResponseDTO.builder().error(e.getMessage()).build();
			return ResponseEntity.badRequest().body(responseDTO);
		}
	}
}
