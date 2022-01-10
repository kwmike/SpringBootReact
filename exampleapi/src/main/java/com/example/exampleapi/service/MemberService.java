package com.example.exampleapi.service;

import java.util.List;
import java.util.Optional;

import com.example.exampleapi.model.Member;

public interface MemberService {
    public Member saveMember(Member member);
    public List<Member> getAllMembers();
    public Optional<Member> findById(Integer id);
}
