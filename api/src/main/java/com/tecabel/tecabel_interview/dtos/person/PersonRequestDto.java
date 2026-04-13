
package com.tecabel.tecabel_interview.dtos.person;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class PersonRequestDto {
  @NotBlank(message = "El nombre es obligatorio")
  @Size(max = 100, message = "El nombre no puede exceder los 100 caracteres")
  private String name;

  @NotBlank(message = "El apellido es obligatorio")
  @Size(max = 100, message = "El apellido no puede exceder los 100 caracteres")
  private String lastName;

  @Past(message = "La fecha de nacimiento debe ser una fecha pasada")
  private LocalDate birthday;

  @Size(max = 100, message = "El puesto no puede exceder los 100 caracteres")
  private String jobPosition;

  @PositiveOrZero(message = "El sueldo debe ser un número positivo o cero")
  private BigDecimal salary;
}
