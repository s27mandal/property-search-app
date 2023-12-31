package com.hin.spatial.postgis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import com.bedatadriven.jackson.datatype.jts.JtsModule;

@SpringBootApplication
@ComponentScan(basePackages = "com.hin.spatial.postgis")
public class PostgisApplication {
	public static void main(String[] args) {
		SpringApplication.run(PostgisApplication.class, args);
	}

	@Bean
	public JtsModule jtsModule() {
		// This module will provide a Serializer for geometries
		return new JtsModule();
	}


}
