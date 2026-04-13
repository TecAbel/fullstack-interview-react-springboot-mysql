
package com.tecabel.tecabel_interview.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tecabel.tecabel_interview.dtos.core.BaseResponseDto;
import com.tecabel.tecabel_interview.dtos.person.PersonRequestDto;
import com.tecabel.tecabel_interview.entities.Person;
import com.tecabel.tecabel_interview.services.PersonService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Null;

@RestController
@RequestMapping("api/v1/persons")
@CrossOrigin(origins = "http://localhost:3000")
public class PersonController {
  @Autowired
  private PersonService personService;

  @GetMapping
  public BaseResponseDto<List<Person>> getAll() {
    var response = new BaseResponseDto<List<Person>>();
    response.setData(this.personService.retrieve());
    response.setStatus(true);
    response.setMsg("Usuarios obtenidos correctamente");
    return response;
  }

  @GetMapping("/{id}")
  public BaseResponseDto<Person> getById(@PathVariable Integer id) {
    var response = new BaseResponseDto<Person>();
    response.setStatus(true);
    response.setMsg("Usuario encontrado");
    response.setData(this.personService.findById(id));
    return response;
  }

  @PostMapping
  public BaseResponseDto<Person> create(@Valid @RequestBody PersonRequestDto dto) {
    var response = new BaseResponseDto<Person>();
    response.setStatus(true);
    response.setMsg("Usuario registrado correctamente");
    response.setData(this.personService.save(dto));
    return response;
  }

  @DeleteMapping("/{id}")
  public BaseResponseDto<Null> delete(@PathVariable Integer id) {
    this.personService.deleteById(id);
    var response = new BaseResponseDto<Null>();
    response.setStatus(true);
    response.setMsg("Usuario eliminado correctamente");
    response.setData(null);
    return response;
  }
}
