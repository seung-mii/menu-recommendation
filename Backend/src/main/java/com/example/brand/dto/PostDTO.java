package com.example.brand.dto;

import com.example.brand.model.PostEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostDTO {
	private String p_key;
	private String r_key;
	private String title; 
	private String photo; 
	private String contents;
	

	public PostDTO(final PostEntity entity) {
		this.p_key = entity.getP_key();
		this.r_key = entity.getR_key();
		this.title = entity.getTitle();
		this.photo = entity.getPhoto();
		this.contents = entity.getContents();
	}
	
	public static PostEntity toEntity(final PostDTO dto) {
		return PostEntity.builder()
				.p_key(dto.getP_key())
				.r_key(dto.getR_key())
				.title(dto.getTitle())
				.photo(dto.getPhoto())
				.contents(dto.getContents())
				.build();
	}
}
