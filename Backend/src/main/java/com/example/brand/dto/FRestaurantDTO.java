package com.example.brand.dto;

import com.example.brand.model.FRestaurantEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class FRestaurantDTO {
	private String r_key;
	private String m_key;
	private String brand; // 상호명
	private String name;  // 대표자성명
	private String menu;  // 대표메뉴명
	private String explanation;  // 메뉴설명
	private String photo;    // 사진
	private int price;    // 가격
	private String location; // 위치
	private String contact;  // 전화번호
	
	public FRestaurantDTO(final FRestaurantEntity entity) {
		this.r_key = entity.getR_key();
		this.m_key = entity.getM_key();
		this.brand = entity.getBrand();
		this.name = entity.getName();
		this.menu = entity.getMenu();
		this.explanation = entity.getExplanation();
		this.photo = entity.getPhoto();
		this.price = entity.getPrice();
		this.location = entity.getLocation();
		this.contact = entity.getContact();
		
	}
	public static FRestaurantEntity toEntity(final FRestaurantDTO dto) {
		return FRestaurantEntity.builder()
				.r_key(dto.getR_key())
				.m_key(dto.getM_key())
				.brand(dto.getBrand())
				.name(dto.getName())
				.menu(dto.getMenu())
				.explanation(dto.getExplanation())
				.photo(dto.getPhoto())
				.price(dto.getPrice())
				.location(dto.getLocation())
				.contact(dto.getContact())
				.build();
	}
}
