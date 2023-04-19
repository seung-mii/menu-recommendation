package com.example.brand.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "FRESTAURANT")
public class FRestaurantEntity {
	@Id
	@GeneratedValue(generator="system-uuid")  // �ڵ����� id ����
	@GenericGenerator(name="system-uuid",strategy="uuid")
	private String r_key;

	@Column(nullable=false)
	private String m_key;

	@Column(nullable=false)
	private String brand; // 상호명

	@Column(nullable=false)
	private String name;  // 대표자성명

	@Column(nullable=false)
	private String menu;  // 대표메뉴명

	@Column(nullable=false)
	private String explanation;  // 메뉴설명

	@Column(nullable=true)
	private String photo;    // 사진
	
	@Column(nullable=false)
	private int price;    // 가격

	@Column(nullable=false)
	private String location; // 위치

	@Column(nullable=false)
	private String contact;  // 전화번호
}