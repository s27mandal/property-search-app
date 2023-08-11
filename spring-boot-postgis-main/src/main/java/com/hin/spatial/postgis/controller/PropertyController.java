package com.hin.spatial.postgis.controller;

import java.util.Collections;
import java.util.List;

import org.locationtech.jts.geom.Point;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hin.spatial.postgis.model.Property;
import com.hin.spatial.postgis.model.PropertyDetails;
import com.hin.spatial.postgis.model.UserRegistration;
import com.hin.spatial.postgis.repo.PropertyRepository;
import com.hin.spatial.postgis.repo.UserRegistrationRepo;
import com.hin.spatial.postgis.service.PropertyDetailsService;
import com.hin.spatial.postgis.service.PropertyService;


@RestController
@RequestMapping("property")
@CrossOrigin(origins = "http://localhost:4200")
public class PropertyController {
    @Autowired
    private PropertyService service;
    
    @Autowired
    private PropertyDetailsService propertyDetailsService;
    
    @Autowired
    private UserRegistrationRepo ur;
    
    @Autowired
    private PropertyRepository propertyRepository;  
    

    @GetMapping("{name}")
    public String getProperties(@PathVariable String name) {
        return "Welcome to SpringBoot Project!!! " + name;
    }

    @GetMapping("{lat}/{lon}/{distanceKm}")
    public ResponseEntity<?> getCityNear(
            @PathVariable double lat,
            @PathVariable double lon,
            @PathVariable double distanceKm) {
        List<Property> properties = service.findAround(lat, lon, distanceKm);

        if (properties.isEmpty()) {
            // If no properties found, return a custom message with 404 status code
            String message = "Properties are not available in your area.";
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new CustomMessage(message));
        } else {
            // If properties found, return the properties in the response with 200 status code
            return ResponseEntity.ok(properties);
        }
    }


    @GetMapping("names")
    public String getPropertyNames() {
        List<Property> properties = service.getAllProperties();
        StringBuilder sb = new StringBuilder();
        for (Property property : properties) {
            sb.append("City: ").append(property.getCityName());
            sb.append(", Price: ").append(property.getPrice());
            sb.append(", Property Name: ").append(property.getPropertyName());
            sb.append(", Property Type: ").append(property.getPropertyType());
            sb.append(", Area: ").append(property.getArea());
            sb.append(", Carpet Area: ").append(property.getCarpetArea()).append("\n");
        }
        return sb.toString();
    }
    
    @GetMapping("/details/{propertyId}")
    public ResponseEntity<?> getPropertyDetails(@PathVariable Long propertyId) {
        System.out.println("Received propertyId: " + propertyId);

        PropertyDetails propertyDetails = propertyDetailsService.getPropertyDetailsByPropertyId(propertyId);

        if (propertyDetails != null) {
            return ResponseEntity.ok(propertyDetails);
        } else {
            String message = "Property details not found for property ID: " + propertyId;
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new CustomMessage(message));
        }
    }   

    // Custom message class
    private static class CustomMessage {
        private String message;

        public CustomMessage(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }
    }
    
    @GetMapping("/getusers")
    public List<UserRegistration> getUsers(){
        return ur.findAll();
    }
 
  @PostMapping("/register")
    public UserRegistration signupUser(@RequestBody UserRegistration newuser) {
        return ur.save(newuser);
    }

    
    @PostMapping("/login/user")
    public String insertDetails(@RequestBody UserRegistration user) {
        List<UserRegistration> allUsers = ur.findAll();
        for(UserRegistration currentUser: allUsers) {
            if (currentUser.getUsername().equals(user.getUsername())) {
                if (currentUser.getPassword().equals(user.getPassword())) {
                    return "success";
                }
                return "Invalid Password";
            }
        }
        return "Invalid Username";
    }
    
    @GetMapping("/{cityName}/{area}")
    public ResponseEntity<?> getPropertiesByCityAndArea(
            @PathVariable String cityName,
            @PathVariable String area) {
        List<Property> properties = service.getPropertiesByCityAndArea(cityName, area);

        if (properties.isEmpty()) {
            String message = "No properties found with the provided criteria.";
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new CustomMessage(message));
        } else {
            return ResponseEntity.ok(properties);
        }
    }
    
     

    

}

