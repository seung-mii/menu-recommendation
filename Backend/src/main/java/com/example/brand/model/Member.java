package com.example.brand.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.GenericGenerator;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(uniqueConstraints = {@UniqueConstraint(columnNames = "userID")})
public class Member {
	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid",strategy="uuid")
	private String m_key;

	@Column(nullable=false)
	private String name;

	@Column(nullable=false)
	private String userID;
	
	@Column(nullable=false)
	private String password;

	@Column(nullable=false)
	private String phone;  
	
	@Column(nullable=true)
	private String nickname;
	
}
