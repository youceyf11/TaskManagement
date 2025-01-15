package org.project.TaskFlow.Service;

import lombok.RequiredArgsConstructor;
import org.project.TaskFlow.Entity.User;
import org.project.TaskFlow.Payload.Request.LoginRequest;
import org.project.TaskFlow.Payload.Request.UserCreateRequest;
import org.project.TaskFlow.Repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthetificationService {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;



    public boolean login(LoginRequest loginRequest){
        User user= userRepository.findByEmail(loginRequest.email())
                .orElse(null);

        if(user== null){
            return false;
        }
        if(passwordEncoder.matches(loginRequest.password(), user.getPassword())){
            return true;
        }
        return false;
    }

    public void register(UserCreateRequest userCreateRequest){
        userService.createUser(userCreateRequest);
    }
}
