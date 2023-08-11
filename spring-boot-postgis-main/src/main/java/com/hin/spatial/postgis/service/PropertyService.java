package com.hin.spatial.postgis.service;

import java.text.ParseException;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hin.spatial.postgis.model.Property;
import com.hin.spatial.postgis.repo.PropertyRepository;


import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Point;
import org.locationtech.jts.geom.PrecisionModel;



@Service
public class PropertyService {
    @Autowired
    private PropertyRepository propertyRepository;
    
    private GeometryFactory factory = new GeometryFactory(new PrecisionModel(), 4326);
    
    public List<Property> findAround(double lat, double lon, double distanceKm){
        Point p = factory.createPoint(new Coordinate(lon, lat));        
        List<Property> pros = propertyRepository.findNearWithinDistance(p, distanceKm * 1000);
        return pros;
    }
    public List<Property> getPropertiesByCityAndArea(String cityName, String area) {
        return propertyRepository.findByCityNameAndArea(cityName, area);
    }


    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }
    
   

}
