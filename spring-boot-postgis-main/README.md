### Spring Boot and PostGIS tutorial

This project demonstrate how you can use PostGIS and Spring Boot to manage spatial data

### Buid the applicaion
```
mvn clean install
```

### Run the application
```
mvn spring-boot:run
```


### Test the REST API

Open your browser at <http://localhost:8980/property/12.762082/80.003817/20>


- 1st parameter: latitude in degree
- 2nd parameter: longitude in degree
- 3rd parameter: distance in Kilometer


This will return all the properties within the distance around the specified location.