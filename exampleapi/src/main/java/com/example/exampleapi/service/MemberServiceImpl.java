package com.example.exampleapi.service;
import java.util.List;
import java.util.Optional;

import com.example.exampleapi.model.Member;
import com.example.exampleapi.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class MemberServiceImpl implements MemberService {
    @Autowired
    private MemberRepository memberRepository;
    @Override
    public Member saveMember(Member member) {
        return memberRepository.save(member);
    }
    @Override
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }
    @Override
    public Optional<Member> findById(Integer id) {
        return memberRepository.findById(id);
    }
}
