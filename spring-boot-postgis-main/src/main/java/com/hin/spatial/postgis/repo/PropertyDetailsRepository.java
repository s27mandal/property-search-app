package com.hin.spatial.postgis.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hin.spatial.postgis.model.PropertyDetails;

@Repository
public interface PropertyDetailsRepository extends JpaRepository<PropertyDetails, Long> {
	PropertyDetails findByPropertyDetailsId(Long propertyDetailsId);
}
