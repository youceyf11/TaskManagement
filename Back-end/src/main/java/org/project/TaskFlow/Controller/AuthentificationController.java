package org.project.TaskFlow.Controller;

import lombok.RequiredArgsConstructor;
import org.project.TaskFlow.Payload.Request.LoginRequest;
import org.project.TaskFlow.Payload.Request.UserCreateRequest;
import org.project.TaskFlow.Service.AuthetificationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AuthentificationController {
    private final AuthetificationService authetificationService;

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody LoginRequest loginRequest){
        return ResponseEntity.ok(authetificationService.login(loginRequest));
    }

    @PostMapping("/register")
    public ResponseEntity<Void> register(@RequestBody UserCreateRequest userCreateRequest){
         authetificationService.register(userCreateRequest);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
