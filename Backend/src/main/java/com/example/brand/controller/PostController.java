package com.example.brand.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.brand.dto.ResponseDTO;
import com.example.brand.dto.PostDTO;
import com.example.brand.model.PostEntity;
import com.example.brand.service.PostService;

import lombok.extern.slf4j.Slf4j;

//@CrossOrigin(origins = "*")
@Slf4j
@RestController
@RequestMapping("post")
public class PostController {
	@Autowired
	private PostService service;
	

	@PostMapping
	public ResponseEntity<?> createBrand(
			@AuthenticationPrincipal String r_key,
			@RequestBody PostDTO dto) {
		try {
		PostEntity entity = PostDTO.toEntity(dto);
		entity.setP_key(null);
		entity.setR_key(r_key);
		
		List<PostEntity> entities = service.create(entity);
		
		List<PostDTO> dtos = entities.stream().map(PostDTO::new).collect(Collectors.toList());
		log.info("Log:entities => dtos ok!");		

		ResponseDTO<PostDTO> response = ResponseDTO.<PostDTO>builder().data(dtos).build();
		log.info("Log:responsedto ok!");
		
		return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			String error = e.getMessage();
			ResponseDTO<PostDTO> response = ResponseDTO.<PostDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
		}
	}
	
	@GetMapping
	public ResponseEntity<?> retrieveBrand(@AuthenticationPrincipal String r_key) {
		
		List<PostEntity> entities = service.retrieve(r_key);
		List<PostDTO> dtos = entities.stream().map(PostDTO::new).collect(Collectors.toList());

		ResponseDTO<PostDTO> response = ResponseDTO.<PostDTO>builder().data(dtos).build();
		
		// HTTP Status 200 ���·� response �� �����Ѵ�.
		return ResponseEntity.ok().body(response);
	}
	
	
	@GetMapping("/all")
	public ResponseEntity<?> retrieveBrandAll(@AuthenticationPrincipal String r_key) {
		
		List<PostEntity> entities = service.retrieveAll(r_key);
		List<PostDTO> dtos = entities.stream().map(PostDTO::new).collect(Collectors.toList());

		ResponseDTO<PostDTO> response = ResponseDTO.<PostDTO>builder().data(dtos).build();
		
		// HTTP Status 200 ���·� response �� �����Ѵ�.
		return ResponseEntity.ok().body(response);
	}
	
	@PutMapping
	public ResponseEntity<?> updateBrand(
			@AuthenticationPrincipal String r_key,
			@RequestBody PostDTO dto) {
		try {
		PostEntity entity = PostDTO.toEntity(dto);
		entity.setR_key(r_key);
		
		List<PostEntity> entities = service.update(entity);
		
		List<PostDTO> dtos = entities.stream().map(PostDTO::new).collect(Collectors.toList());

		ResponseDTO<PostDTO> response = ResponseDTO.<PostDTO>builder().data(dtos).build();
		
		return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			String error = e.getMessage();
			ResponseDTO<PostDTO> response = ResponseDTO.<PostDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
		}
		
	}
}
