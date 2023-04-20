package com.example.brand.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
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
}
