package com.hin.spatial.postgis.model;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "property_details")
public class PropertyDetails {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "property_details_id")

    private Long propertyDetailsId;

	
	@ManyToOne
    @JoinColumn(name = "property_id", referencedColumnName = "property_id")
    private Property property;

    @Column(name = "images")
    private String images;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "address")
    private String address;

    @Column(name = "property_type")
    private String propertyType;

    @Column(name = "property_size")
    private Integer propertySize;

    @Column(name = "contact_info")
    private String contactInfo;

    @Column(name = "floor_plan")
    private String floorPlan;

    @Column(name = "property_features")
    private String propertyFeatures;

    @Column(name = "build_year")
    private Integer buildYear;
    
    @Column(name = "nearby_facilities")
    private String nearbyFacilities;

    public Long getPropertyDetailsId() {
		return propertyDetailsId;
	}

	public void setPropertyDetailsId(Long propertyDetailsId) {
		this.propertyDetailsId = propertyDetailsId;
	}

	public String getImages() {
		return images;
	}

	public void setImages(String images) {
		this.images = images;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPropertyType() {
		return propertyType;
	}

	public void setPropertyType(String propertyType) {
		this.propertyType = propertyType;
	}

	public Integer getPropertySize() {
		return propertySize;
	}

	public void setPropertySize(Integer propertySize) {
		this.propertySize = propertySize;
	}

	public String getContactInfo() {
		return contactInfo;
	}

	public void setContactInfo(String contactInfo) {
		this.contactInfo = contactInfo;
	}

	public String getFloorPlan() {
		return floorPlan;
	}

	public void setFloorPlan(String floorPlan) {
		this.floorPlan = floorPlan;
	}

	public String getPropertyFeatures() {
		return propertyFeatures;
	}

	public void setPropertyFeatures(String propertyFeatures) {
		this.propertyFeatures = propertyFeatures;
	}

	public Integer getBuildYear() {
		return buildYear;
	}

	public void setPropertyBuildDate(Integer buildYear) {
		this.buildYear = buildYear;
	}

	public String getNearbyFacilities() {
		return nearbyFacilities;
	}

	public void setNearbyFacilities(String nearbyFacilities) {
		this.nearbyFacilities = nearbyFacilities;
	}
	
	
	@Override
	public String toString() {
	    return "PropertyDetails [propertyDetailsId=" + propertyDetailsId + ", images=" + images + ", description=" + description
	            + ", price=" + price + ", address=" + address + ", propertyType=" + propertyType + ", propertySize=" + propertySize
	            + ", contactInfo=" + contactInfo + ", floorPlan=" + floorPlan + ", propertyFeatures=" + propertyFeatures
	            + ", buildYear=" + buildYear + ", nearbyFacilities=" + nearbyFacilities + "]";
	}

	
}
