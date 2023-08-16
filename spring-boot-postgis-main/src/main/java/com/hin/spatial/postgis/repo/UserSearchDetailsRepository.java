package com.hin.spatial.postgis.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hin.spatial.postgis.model.UserSearchDetails;

@Repository
public interface UserSearchDetailsRepository extends JpaRepository<UserSearchDetails, String> {

}
