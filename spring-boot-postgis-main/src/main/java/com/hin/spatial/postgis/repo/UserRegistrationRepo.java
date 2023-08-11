package com.hin.spatial.postgis.repo;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.hin.spatial.postgis.model.UserRegistration;

public interface UserRegistrationRepo extends   JpaRepository <UserRegistration,String>{

//	List<UserRegistration> findAll();
//
//	List<UserRegistration> findAll();
	

}

