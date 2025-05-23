package com.email.writer;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/email")
public class EmailGeneratorController{
    public ResponseEntity<String> generateEmail(@Req)
}