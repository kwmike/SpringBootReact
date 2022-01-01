package com.example.exampleapi.service;

import java.util.List;

import com.example.exampleapi.model.Member;

public interface MemberService {
    public Member saveMember(Member member);
    public List<Member> getAllMembers();
    
}
