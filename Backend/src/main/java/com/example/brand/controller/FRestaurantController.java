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
import com.example.brand.dto.FRestaurantDTO;
import com.example.brand.model.FRestaurantEntity;
import com.example.brand.service.FRestaurantService;

import lombok.extern.slf4j.Slf4j;

//@CrossOrigin(origins = "*")
@Slf4j
@RestController
@RequestMapping("frestaurant")
public class FRestaurantController {
	
	@Autowired
	private FRestaurantService service;
	

	@PostMapping
	public ResponseEntity<?> createBrand(
			@AuthenticationPrincipal String m_key,
			@RequestBody FRestaurantDTO dto) {
		try {
		FRestaurantEntity entity = FRestaurantDTO.toEntity(dto);
		entity.setR_key(null);
		entity.setM_key(m_key);
		
		List<FRestaurantEntity> entities = service.create(entity);
		
		List<FRestaurantDTO> dtos = entities.stream().map(FRestaurantDTO::new).collect(Collectors.toList());
		log.info("Log:entities => dtos ok!");		

		ResponseDTO<FRestaurantDTO> response = ResponseDTO.<FRestaurantDTO>builder().data(dtos).build();
		log.info("Log:responsedto ok!");
		
		return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			String error = e.getMessage();
			ResponseDTO<FRestaurantDTO> response = ResponseDTO.<FRestaurantDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
		}
	}
	
	@GetMapping
	public ResponseEntity<?> retrieveBrand(@AuthenticationPrincipal String m_key) {
		
		List<FRestaurantEntity> entities = service.retrieve(m_key);
		List<FRestaurantDTO> dtos = entities.stream().map(FRestaurantDTO::new).collect(Collectors.toList());

		ResponseDTO<FRestaurantDTO> response = ResponseDTO.<FRestaurantDTO>builder().data(dtos).build();
		
		// HTTP Status 200 ���·� response �� �����Ѵ�.
		return ResponseEntity.ok().body(response);
		
	}
	

	@PutMapping
	public ResponseEntity<?> updateBrand(
			@AuthenticationPrincipal String m_key,
			@RequestBody FRestaurantDTO dto) {
		try {
		FRestaurantEntity entity = FRestaurantDTO.toEntity(dto);
		entity.setM_key(m_key);
		
		List<FRestaurantEntity> entities = service.update(entity);
		
		List<FRestaurantDTO> dtos = entities.stream().map(FRestaurantDTO::new).collect(Collectors.toList());

		ResponseDTO<FRestaurantDTO> response = ResponseDTO.<FRestaurantDTO>builder().data(dtos).build();
		
		return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			String error = e.getMessage();
			ResponseDTO<FRestaurantDTO> response = ResponseDTO.<FRestaurantDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
		}
		
	}
	@DeleteMapping
	public ResponseEntity<?> deleteBrand(
			@AuthenticationPrincipal String m_key,
			@RequestBody FRestaurantDTO dto) {
		try {
			FRestaurantEntity entity = FRestaurantDTO.toEntity(dto);

			entity.setM_key(m_key);

			List<FRestaurantEntity> entities = service.delete(entity);
			
			List<FRestaurantDTO> dtos = entities.stream().map(FRestaurantDTO::new).collect(Collectors.toList());
		
			ResponseDTO<FRestaurantDTO> response = ResponseDTO.<FRestaurantDTO>builder().data(dtos).build();
			
			return ResponseEntity.ok().body(response);
			} catch (Exception e) {
				String error = e.getMessage();
				ResponseDTO<FRestaurantDTO> response = ResponseDTO.<FRestaurantDTO>builder().error(error).build();
				return ResponseEntity.badRequest().body(response);
			}			
	
	}
}
