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
import com.example.brand.dto.StarDTO;
import com.example.brand.model.StarEntity;
import com.example.brand.service.StarService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("star")
public class StarController {
	@Autowired
	private StarService service;

	@PostMapping
	public ResponseEntity<?> createBrand(
			@AuthenticationPrincipal String r_key,
			@RequestBody StarDTO dto) {
		try {
			StarEntity entity = StarDTO.toEntity(dto);
			entity.setS_key(null);
			entity.setR_key(r_key);

			List<StarEntity> entities = service.create(entity);

			List<StarDTO> dtos = entities.stream().map(StarDTO::new).collect(Collectors.toList());
			log.info("Log:entities => dtos ok!");

			ResponseDTO<StarDTO> response = ResponseDTO.<StarDTO>builder().data(dtos).build();
			log.info("Log:responsedto ok!");

			return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			String error = e.getMessage();
			ResponseDTO<StarDTO> response = ResponseDTO.<StarDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
		}
	}
}
