package com.hin.spatial.postgis.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

import org.locationtech.jts.geom.Point;

import lombok.Data;

@Data
@Entity(name = "properties")
public class Property {

	@Id
	@Column(name="property_id")
	private long id;
	
	@OneToOne(mappedBy = "property", cascade = { CascadeType.PERSIST, CascadeType.MERGE }, fetch = FetchType.LAZY)
	private PropertyDetails propertyDetails;
 
	
	@Column(name="city_name")
	private String cityName;
	
	@Column(name="property_location", columnDefinition = "geometry(Point,4326)")
	private Point propertyLocation; 
	
	@Column(name = "price")
    private double price;	

    @Column(name = "property_name")
    private String propertyName;

    @Column(name = "property_type")
    private String propertyType;

    @Column(name = "area")
    private double area;
	
	public String getCityName() {
        return cityName;
    }
	
	
	
	public double getPrice() {
		return price;
	}



	public void setPrice(double price) {
		this.price = price;
	}



	public String getPropertyName() {
		return propertyName;
	}



	public void setPropertyName(String propertyName) {
		this.propertyName = propertyName;
	}



	public String getPropertyType() {
		return propertyType;
	}



	public void setPropertyType(String propertyType) {
		this.propertyType = propertyType;
	}



	public double getArea() {
		return area;
	}



	public void setArea(double area) {
		this.area = area;
	}



	@Override
    public String toString() {
        return "Property [id=" + id + ", cityName=" + cityName + ", propertyLocation=" + propertyLocation
                + ", price=" + price + ", propertyName=" + propertyName + ", propertyType=" + propertyType
                + ", area=" + area + "]";
    }

}