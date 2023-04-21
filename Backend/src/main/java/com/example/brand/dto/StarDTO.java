package com.example.brand.dto;

import com.example.brand.model.StarEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StarDTO {
	private String s_key;
	private String r_key; 
	private String star;
	

	public StarDTO(final StarEntity entity) {
		this.s_key = entity.getS_key();
		this.r_key = entity.getR_key();
		this.star = entity.getStar();
	}
	public static StarEntity toEntity(final StarDTO dto) {
		return StarEntity.builder()
				.s_key(dto.getS_key())
				.r_key(dto.getR_key())
				.star(dto.getStar())
				.build();
	}
}
