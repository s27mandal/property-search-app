package com.hin.spatial.postgis.service;

import java.util.List;

import com.hin.spatial.postgis.model.PropertyDetails;

public interface PropertyDetailsService {
	
	PropertyDetails getPropertyDetailsById(Long propertyDetailsId);
    List<PropertyDetails> getAllPropertyDetails();
    PropertyDetails savePropertyDetails(PropertyDetails propertyDetails);
    void deletePropertyDetails(Long propertyDetailsId);

}
