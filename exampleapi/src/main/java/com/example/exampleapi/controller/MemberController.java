package com.example.exampleapi.controller;
import java.util.List;
import java.util.Optional;

import com.example.exampleapi.model.Member;
import com.example.exampleapi.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/member")
@CrossOrigin
public class MemberController {
    @Autowired
    private MemberService memberService;

    @PostMapping("/add")
    public String add(@RequestBody Member member) {
        memberService.saveMember(member);
        return "New Member is added!";
    }
    @GetMapping("/getAll")
    public List<Member> getAllMembers() {
        return memberService.getAllMembers();
    }
    @GetMapping("/getOne")
    public Optional<Member> findById(Integer id) {
        return memberService.findById(id);
    }

}
