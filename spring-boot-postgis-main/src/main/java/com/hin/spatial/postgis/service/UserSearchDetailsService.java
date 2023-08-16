package com.hin.spatial.postgis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hin.spatial.postgis.model.UserSearchDetails;
import com.hin.spatial.postgis.repo.UserSearchDetailsRepository;

@Service
public class UserSearchDetailsService {

    @Autowired
    private UserSearchDetailsRepository userSearchDetailsRepository;

    public void saveUserSearchDetails(UserSearchDetails searchDetails) {
        userSearchDetailsRepository.save(searchDetails);
    }

    public void saveUserSearchDetailsWithDistance(UserSearchDetails searchDetails) {
        // Only save the distance for this case
        UserSearchDetails detailsWithDistance = new UserSearchDetails();
        detailsWithDistance.setUsername(searchDetails.getUsername());
        detailsWithDistance.setLatitude(searchDetails.getLatitude());
        detailsWithDistance.setLongitude(searchDetails.getLongitude());
        detailsWithDistance.setDistance(searchDetails.getDistance());

        userSearchDetailsRepository.save(detailsWithDistance);
    }

    
}
