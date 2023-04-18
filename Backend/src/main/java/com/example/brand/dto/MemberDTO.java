package com.example.brand.dto;

import com.example.brand.model.Member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberDTO {
	private String token;
	private String m_key; 
	private String name;     // 성명
	private String userID;   // 아이디
	private String password;   // 비밀번호
	private String phone;    // 연락처
	private String nickname; // 닉네임
	

	public MemberDTO(final Member entity) {
		this.m_key = entity.getM_key();
		this.name = entity.getName();
		this.userID = entity.getUserID();
		this.password = entity.getPassword();
		this.phone = entity.getPhone();
		this.nickname = entity.getNickname();
	}
	public static Member toEntity(final MemberDTO dto) {
		return Member.builder()
				.m_key(dto.getM_key())
				.name(dto.getName())
				.userID(dto.getUserID())
				.password(dto.getPassword())
				.phone(dto.getPhone())
				.nickname(dto.getNickname()).build();
	}
}
