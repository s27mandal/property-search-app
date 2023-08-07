package com.hin.spatial.postgis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hin.spatial.postgis.model.PropertyDetails;
import com.hin.spatial.postgis.repo.PropertyDetailsRepository;

@Service
public class PropertyDetailsServiceImpl implements PropertyDetailsService {

	@Autowired
    private PropertyDetailsRepository propertyDetailsRepository;

    @Override
    public PropertyDetails getPropertyDetailsById(Long propertyDetailsId) {
        return propertyDetailsRepository.findByPropertyDetailsId(propertyDetailsId);

    }

    @Override
    public List<PropertyDetails> getAllPropertyDetails() {
       
        return propertyDetailsRepository.findAll();
    }

    @Override
    public PropertyDetails savePropertyDetails(PropertyDetails propertyDetails) {
        
        return propertyDetailsRepository.save(propertyDetails);
    }

    @Override
    public void deletePropertyDetails(Long propertyDetailsId) {
        
        propertyDetailsRepository.deleteById(propertyDetailsId);
    }
}
