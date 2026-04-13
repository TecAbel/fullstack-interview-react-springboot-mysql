
package com.tecabel.tecabel_interview.entities;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "person")
@Data
@NoArgsConstructor
public class Person {

  @Id
  @GeneratedValue
  private Integer id;

  @Column(name = "nombre", length = 100)
  private String name;

  @Column(name = "apellido", length = 100)
  private String lastName;

  @Column(name = "fechaNacimiento")
  private LocalDate birthday;

  @Column(name = "puesto", length = 100)
  private String jobPosition;

  @Column(name = "sueldo")
  private BigDecimal salary;

}
