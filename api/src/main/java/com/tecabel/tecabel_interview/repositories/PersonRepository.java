package com.tecabel.tecabel_interview.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tecabel.tecabel_interview.entities.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Integer> {

}
