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
@Table(name = "POST")
public class PostEntity {
	@Id
	@GeneratedValue(generator="system-uuid")  // �ڵ����� id ����
	@GenericGenerator(name="system-uuid",strategy="uuid")
	private String p_key;

	@Column(nullable=false)
	private String r_key; 
	
	@Column(nullable=false)
	private String title; 
	
	@Column(nullable=true)
	private String photo; 

	@Column(nullable=false)
	private String contents;  
}