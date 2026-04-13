package com.tecabel.tecabel_interview.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.tecabel.tecabel_interview.dtos.person.PersonRequestDto;
import com.tecabel.tecabel_interview.entities.Person;
import com.tecabel.tecabel_interview.repositories.PersonRepository;

@Service
public class PersonService {

  @Autowired
  private PersonRepository personRepository;

  public List<Person> retrieve() {
    return this.personRepository.findAll();
  }

  public Person findById(Integer id) {
    var person = this.personRepository.findById(id).orElseThrow(
        () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuario no encontrado"));
    return person;
  }

  public Person save(PersonRequestDto requestDto) {
    Person person = new Person();

    person.setName(requestDto.getName());
    person.setLastName(requestDto.getLastName());
    person.setBirthday(requestDto.getBirthday());
    person.setJobPosition(requestDto.getJobPosition());
    person.setSalary(requestDto.getSalary());

    return this.personRepository.save(person);
  }

  public Person update(Integer id, PersonRequestDto requestDto) {
    Person person = this.findById(id);

    person.setName(requestDto.getName());
    person.setLastName(requestDto.getLastName());
    person.setBirthday(requestDto.getBirthday());
    person.setJobPosition(requestDto.getJobPosition());
    person.setSalary(requestDto.getSalary());

    return this.personRepository.save(person);
  }

  public void deleteById(Integer id) {
    var person = this.findById(id);
    this.personRepository.deleteById(person.getId());
  }
}
