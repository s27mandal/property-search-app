package com.hin.spatial.postgis.repo;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hin.spatial.postgis.model.Property;
import org.locationtech.jts.geom.Point;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
	
	List<Property> findByCityNameAndArea(String cityName, String area);


    @Query(value = "SELECT * FROM properties WHERE ST_DistanceSphere(property_location, :p) < :distanceM", nativeQuery = true)
    List<Property> findNearWithinDistance(Point p, double distanceM);
    
    

//    @Query(value = "SELECT * FROM properties WHERE city_name = :city AND ST_DistanceSphere(property_location, :p) < :distanceM", nativeQuery = true)
//    List<Property> findPropertiesByCityAndDistance(String city, Point p, double distanceM);
    
//    @Query(value = "SELECT * FROM properties WHERE city_name = :city AND ST_DistanceSphere(property_location, :p) < :distanceM", nativeQuery = true)
//    List<Property> findPropertiesByCityAndDistance(@Param("city") String city, @Param("p") Point p, @Param("distanceM") double distanceM);
//
//    @Query(value = "SELECT ST_AsText(property_location) as location FROM properties WHERE city_name = :city LIMIT 1", nativeQuery = true)
//    Map<String, Object> findCityLocationByName(@Param("city") String city);
    
   

//  @Query(value = "SELECT property_location FROM properties WHERE city_name = :city LIMIT 1", nativeQuery = true)
//   Point findCityLocationByName(String city);
//    
//    @Query(value = "SELECT property_location.y as latitude, property_location.x as longitude FROM properties WHERE city_name = :city LIMIT 1", nativeQuery = true)
//    Map<String, Object> findCityLocationByName(@Param("city") String city);
}

