package com.hin.spatial.postgis.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")

public class UserRegistration {
	
    public UserRegistration(String firstname, String lastname, String accountno, String salary, String username,
			String email, String password, String city, String state) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.accountno = accountno;
		this.salary = salary;
		this.username = username;
		this.email = email;
		this.password = password;
		this.city = city;
		this.state = state;
	}
    
	public UserRegistration() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private String id;
    @Column(name="firstname")
    private String firstname;

    @Column(name="lastname")
    private String lastname;

    @Column(name="accountno")
    private String accountno;

    @Column(name="salary")
    private String salary;

@Column(name="username")
  private String username;

  @Column(name="email")
  private String email;
  @Column(name="password")
  private String password;
  @Column(name="city")
  private String city;
  @Column(name="state")
  private String state;
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getFirstname() {
	return firstname;
}
public void setFirstname(String firstname) {
	this.firstname = firstname;
}
public String getLastname() {
	return lastname;
}
public void setLastname(String lastname) {
	this.lastname = lastname;
}
public String getAccountno() {
	return accountno;
}
public void setAccountno(String accountno) {
	this.accountno = accountno;
}
public String getSalary() {
	return salary;
}
public void setSalary(String salary) {
	this.salary = salary;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getCity() {
	return city;
}
public void setCity(String city) {
	this.city = city;
}
public String getState() {
	return state;
}
public void setState(String state) {
	this.state = state;
}



  
}
