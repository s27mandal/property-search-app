package com.hin.spatial.postgis.service;

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
//@Slf4j
public class PropertyService {
	@Autowired
	private PropertyRepository repo;	
	
	private GeometryFactory factory = new GeometryFactory(new PrecisionModel(), 4326);
	
	public List<Property> findAround(double lat, double lon, double distanceKm){
//		log.info("Looking for Properties around ({},{}) withing {} Km", lat, lon, distanceKm);
		Point p = factory.createPoint(new Coordinate(lon, lat));		
		List<Property> pros=repo.findNearWithinDistance(p, distanceKm * 1000);
        System.out.println(pros);
        return pros;
		
	}
	public List<Property> getAllProperties() {
        return repo.findAll();
    }
}
