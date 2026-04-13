package com.tecabel.tecabel_interview;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

@SpringBootApplication
public class TecabelInterviewApplication {

  public static void main(String[] args) {
    SpringApplication.run(TecabelInterviewApplication.class, args);
  }

  @Bean
  public OpenAPI customOpenAPI() {
    return new OpenAPI()
        .info(new Info()
            .title("API de Gestión de Personas")
            .version("1.0")
            .description("Documentación de la API para el examen Fullstack"));
  }

}
