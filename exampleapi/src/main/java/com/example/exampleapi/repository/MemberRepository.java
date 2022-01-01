package com.example.exampleapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.exampleapi.model.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member,Integer>{

}
