--To enable postgis
CREATE EXTENSION postgis;

drop table properties;
                                                                   
CREATE TABLE properties (
    property_id SERIAL PRIMARY KEY,
    Area VARCHAR(64), 
    property_location geometry(POINT, 4326),
    price NUMERIC,
    property_name VARCHAR(128),
    property_type VARCHAR(64),
    CarpetArea NUMERIC, 
    city_name VARCHAR(64)
);



INSERT INTO properties (property_id, Area, property_location, price, property_name, property_type, CarpetArea, city_name)
VALUES (1, 'Vadapalani', ST_SetSRID(ST_MakePoint(80.211533, 13.052570), 4326), 12000000, 'Property B', 'Commercial', 2000, 'Chennai');


INSERT INTO properties (property_id, Area, property_location, price, property_name, property_type, CarpetArea, city_name)
VALUES (2, 'Kodambakkam', ST_SetSRID(ST_MakePoint(80.230737, 13.051090), 4326), 15000000, 'Property C', 'Residential', 1800, 'Chennai');


INSERT INTO properties (property_id, area, property_location, price, property_name, property_type, carpetArea, city_name)
VALUES (12, 'West Mambalam', ST_SetSRID(ST_MakePoint(80.229347, 13.042449), 4326), 1500000, 'Property12', '2bhk', 1200, 'Chennai');


INSERT INTO properties (property_id, area, property_location, price, property_name, property_type, carpetArea, city_name)
VALUES (4, 'Mambalam', ST_SetSRID(ST_MakePoint(80.227887, 13.036763), 4326), 1750000, 'Property22', '3bhk', 1400, 'Chennai');


INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (5, 'Ashok Nagar', 'SRID=4326;POINT(80.215004 13.039523)', 'Property5', '1bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (6, 'Virukampakkam', 'SRID=4326;POINT(80.193412 13.046390)', 'Property6', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (7, 'Ekkattuthangal', 'SRID=4326;POINT(80.207154 13.023645)', 'Property7', '2bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (8, 'Nesapakkam', 'SRID=4326;POINT(80.187572 13.032844)', 'Property8', '1bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (9, 'Ramapuram', 'SRID=4326;POINT(80.176063 13.029164)', 'Property9', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (10, 'Chetpet', 'SRID=4326;POINT(80.242627 13.069822)', 'Property10', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (11, 'Porur', 'SRID=4326;POINT(80.157426 13.030691)', 'Property11', '2bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (12, 'Chennai', 'SRID=4326;POINT(80.274577 13.079855)', 'Property12', '1bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (13, 'Chepauk', 'SRID=4326;POINT(80.284197 13.062464)', 'Property13', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (14, 'Padi', 'SRID=4326;POINT(80.196036 13.103374)', 'Property14', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (15, 'Tambaram', 'SRID=4326;POINT(80.112601 12.918990)', 'Property15', '2bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (16, 'Kundrathur', 'SRID=4326;POINT(80.100233 12.990591)', 'Property16', '1bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (17, 'Avadi', 'SRID=4326;POINT(80.102294 13.115007)', 'Property17', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (18, 'Sriperumbudur', 'SRID=4326;POINT(80.102903 12.920859)', 'Property18', '2bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (19, 'Thiruvallur', 'SRID=4326;POINT(79.906391 13.132255)', 'Property19', '1bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (20, 'Maraimalai Nagar', 'SRID=4326;POINT(80.024776 12.793806)', 'Property20', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (21, 'Chengalpattu', 'SRID=4326;POINT(79.985612 12.681289)', 'Property21', '2bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (22, 'Kondapur', 'SRID=4326;POINT(78.368610 17.465804)', 'Property22', '1bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (23, 'Raghvendra Colony', 'SRID=4326;POINT(78.355724 17.470061)', 'Property23', '2bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (24, 'Secunderabad', 'SRID=4326;POINT(78.497417 17.447021)', 'Property24', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (25, 'LB Nagar', 'SRID=4326;POINT(78.5499997 17.3589258)', 'Property25', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (26, 'Banjara Hills', 'SRID=4326;POINT(78.4151685 17.4159746)', 'Property26', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (27, 'Jubilee Hills', 'SRID=4326;POINT(78.3891718 17.431103)', 'Property27', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));


INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (28, 'Ameerpet', 'SRID=4326;POINT(78.4343206 17.4392062)', 'Property28', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));


INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (29, 'Madhapur', 'SRID=4326;POINT(78.3504455 17.4485147)', 'Property29', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));


INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (30, 'Nagole', 'SRID=4326;POINT(78.5502119 17.375201)', 'Property30', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));



INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (31, 'Panjagutta', 'SRID=4326;POINT(78.441055 17.426128)', 'Property31', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));



INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (32, 'Charminar (Old-City)', 'SRID=4326;POINT(78.4745731 17.3540073)', 'Property32', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));



INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (33, 'Begumpet', 'SRID=4326;POINT(78.4471762 17.4443809)', 'Property33', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));



INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (34, 'Gachibowli', 'SRID=4326;POINT(78.2985743 17.4440523)', 'Property34', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));



INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (35, 'DLF Cybercity', 'SRID=4326;POINT(78.3530265 17.4470376)', 'Property35', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));



INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (36, 'Financial District', 'SRID=4326;POINT(78.3200628 17.4139264)', 'Property36', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));

INSERT INTO properties (property_id, city_name, property_location, property_name, property_type, price, area)
VALUES (37, 'Shamshabad', 'SRID=4326;POINT(78.3849919 17.2445158)', 'Property36', '3bhk', ROUND(RANDOM() * 2000000 + 1000000), ROUND(RANDOM() * 2000 + 1000));


CREATE TABLE property_details (
  property_details_id SERIAL PRIMARY KEY,
  property_id INT REFERENCES properties(property_id),
  images VARCHAR(255),
  description TEXT,
  price NUMERIC,
  address VARCHAR(255),
  property_type VARCHAR(50),
  property_size INT,
  contact_info VARCHAR(255),
  floor_plan TEXT,
  property_features TEXT,
  build_year INT,
  nearby_facilities TEXT
);






INSERT INTO property_details (property_id, images, description, price, address, property_type, property_size, contact_info, floor_plan, property_features, build_year, nearby_facilities)
VALUES (22, 'image1.jpg,image2.jpg,image3.jpg', 'This is a beautiful property with a stunning view.', 500000, '123 Main Street, Hyderabad, Telengana, India', '4BHK Independent Villa', 2000, 'Contact: Kamal Rajan, Email: shubham@gmail.com, Phone: +9134567890', 'floor_plan.jpg', 'Swimming pool, Garden, Garage', '2023', 'Schools, Parks, Shopping malls, Gym');



cities: string[] = [
    'Delhi',
    'Chennai',
    'Mumbai',
    'Hyderabad',
    'Pune',
    'Bhopal',
    'Gurgaon',
    'Noida',
    'Chandigarh',
    'Kochi',
    'Bengaluru',
  ];





  

select * from properties;

  --geometry
  SELECT * from properties where ST_DistanceSphere(property_location, ST_Point(12.683995, 79.983345)) < 20000;
  
  --geography
  SELECT * FROM properties WHERE ST_DWithin(
  property_location,
  ST_MakePoint(80.003817, 12.762082),
  30000);
  
  SELECT * FROM properties WHERE ST_DWithin(
  property_location::geography,
  (ST_SetSRID(ST_MakePoint(12.683995, 79.983345), 4326))::geography,
  20000);
  
  
  SELECT * FROM properties WHERE ST_DWithin(
  property_location::geography,
  ST_Point(12.683995, 79.983345)::geography,
  20000);
  
  
   SELECT * FROM properties WHERE ST_DWithin(
  property_location::geography,
  ST_Point(12.683995, 79.983345)::geography,
  20000, false);


























