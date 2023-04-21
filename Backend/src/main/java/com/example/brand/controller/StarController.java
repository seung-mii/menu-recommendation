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
	
	@GetMapping
	public ResponseEntity<?> retrieveBrand(@AuthenticationPrincipal String r_key) {
		
		List<StarEntity> entities = service.retrieve(r_key);
		List<StarDTO> dtos = entities.stream().map(StarDTO::new).collect(Collectors.toList());

		ResponseDTO<StarDTO> response = ResponseDTO.<StarDTO>builder().data(dtos).build();
		
		// HTTP Status 200 ���·� response �� �����Ѵ�.
		return ResponseEntity.ok().body(response);
		
	}
	
	@GetMapping("/one")
	public ResponseEntity<?> retrieveBrandOne(@AuthenticationPrincipal String r_key) {
		
		List<StarEntity> entities = service.retrieveOne(r_key);
		List<StarDTO> dtos = entities.stream().map(StarDTO::new).collect(Collectors.toList());

		ResponseDTO<StarDTO> response = ResponseDTO.<StarDTO>builder().data(dtos).build();
		
		// HTTP Status 200 ���·� response �� �����Ѵ�.
		return ResponseEntity.ok().body(response);
		
	}

	@PutMapping
	public ResponseEntity<?> updateBrand(
			@AuthenticationPrincipal String r_key,
			@RequestBody StarDTO dto) {
		try {
		StarEntity entity = StarDTO.toEntity(dto);
		entity.setR_key(r_key);
		
		List<StarEntity> entities = service.update(entity);
		
		List<StarDTO> dtos = entities.stream().map(StarDTO::new).collect(Collectors.toList());

		ResponseDTO<StarDTO> response = ResponseDTO.<StarDTO>builder().data(dtos).build();
		
		return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			String error = e.getMessage();
			ResponseDTO<StarDTO> response = ResponseDTO.<StarDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
		}
		
	}
	@DeleteMapping
	public ResponseEntity<?> deleteBrand(
			@AuthenticationPrincipal String r_key,
			@RequestBody StarDTO dto) {
		try {
			StarEntity entity = StarDTO.toEntity(dto);

			entity.setR_key(r_key);

			List<StarEntity> entities = service.delete(entity);
			
			List<StarDTO> dtos = entities.stream().map(StarDTO::new).collect(Collectors.toList());
		
			ResponseDTO<StarDTO> response = ResponseDTO.<StarDTO>builder().data(dtos).build();
			
			return ResponseEntity.ok().body(response);
			} catch (Exception e) {
				String error = e.getMessage();
				ResponseDTO<StarDTO> response = ResponseDTO.<StarDTO>builder().error(error).build();
				return ResponseEntity.badRequest().body(response);
			}			
	
	}
}
