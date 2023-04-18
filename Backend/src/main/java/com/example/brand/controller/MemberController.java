package com.example.brand.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.brand.dto.ResponseDTO;
import com.example.brand.dto.MemberDTO;
import com.example.brand.model.Member;
import com.example.brand.security.TokenProvider;
import com.example.brand.service.MemberService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/auth")
public class MemberController {
	@Autowired
	private MemberService MemberService;

	@Autowired
	private TokenProvider tokenProvider;

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

	@PostMapping("/signin")
	public ResponseEntity<?> authenticate(@RequestBody MemberDTO MemberDTO) {
		Member user = MemberService.getByCredentials(MemberDTO.getUserID(), MemberDTO.getPassword(), passwordEncoder);

		if (user != null) {
			final String token = tokenProvider.create(user);
			final MemberDTO responseMemberDTO = MemberDTO.builder()
					.name(user.getName())
					.userID(user.getUserID())
					.m_key(user.getM_key())
					.password(passwordEncoder.encode(MemberDTO.getPassword()))
					.phone(user.getPhone())
					.nickname(user.getNickname())
					.token(token)
					.build();

			return ResponseEntity.ok().body(responseMemberDTO);
		} else {
			ResponseDTO responseDTO = ResponseDTO.builder()
					.error("Login failed")
					.build();
			return ResponseEntity.badRequest().body(responseDTO);
		}
	}

	@GetMapping("/user")
	public ResponseEntity<?> retrieve(@AuthenticationPrincipal String id) {

		List<Member> entities = MemberService.retrieve(id);
		List<MemberDTO> dtos = entities.stream().map(MemberDTO::new).collect(Collectors.toList());

		ResponseDTO<MemberDTO> response = ResponseDTO.<MemberDTO>builder().data(dtos).build();

		// HTTP Status 200 ���·� response �� �����Ѵ�.
		return ResponseEntity.ok().body(response);
	}

	@PutMapping
	public ResponseEntity<?> update(@AuthenticationPrincipal String id, @RequestBody MemberDTO MemberDTO) {
		try {
			Member entity = MemberDTO.toEntity(MemberDTO);
			entity.setM_key(id);

			List<Member> entities = MemberService.update(entity);
			List<MemberDTO> dtos = entities.stream().map(MemberDTO::new).collect(Collectors.toList());

			ResponseDTO<MemberDTO> response = ResponseDTO.<MemberDTO>builder().data(dtos).build();

			return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			ResponseDTO<MemberDTO> response = ResponseDTO.<MemberDTO>builder().error(e.getMessage()).build();
			return ResponseEntity.badRequest().body(response);
		}
	}

	@DeleteMapping
	public ResponseEntity<?> delete(@AuthenticationPrincipal String id, @RequestBody MemberDTO MemberDTO) {
		try {
			Member entity = MemberDTO.toEntity(MemberDTO);
			entity.setM_key(id);

			List<Member> entities = MemberService.delete(entity);
			List<MemberDTO> dtos = entities.stream().map(MemberDTO::new).collect(Collectors.toList());

			ResponseDTO<MemberDTO> response = ResponseDTO.<MemberDTO>builder().data(dtos).build();

			return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			ResponseDTO<MemberDTO> response = ResponseDTO.<MemberDTO>builder().error(e.getMessage()).build();
			return ResponseEntity.badRequest().body(response);
		}
	}
}
