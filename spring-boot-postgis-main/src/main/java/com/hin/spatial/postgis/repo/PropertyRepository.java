package com.hin.spatial.postgis.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hin.spatial.postgis.model.Property;
import org.locationtech.jts.geom.Point;

@Repository
public interface PropertyRepository  extends JpaRepository<Property, Long>{

	@Query(value="SELECT * FROM properties WHERE ST_DistanceSphere(property_location,:p) < :distanceM",nativeQuery = true)
	List<Property> findNearWithinDistance(Point p, double distanceM);
	
}
