package org.project.TaskFlow.Payload.Mapper;

import org.project.TaskFlow.Entity.User;
import org.project.TaskFlow.Payload.Request.UserCreateRequest;
import org.project.TaskFlow.Payload.Request.UserRequest;
import org.project.TaskFlow.Payload.Response.UserResponse;
import org.springframework.stereotype.Service;

@Service
public class UserMapper {
    public User toUser(UserRequest userRequest){
        return User.builder()
                .name(userRequest.name())
                .email(userRequest.email())
                .roles(userRequest.roles())
                .build();
    }

    public User toUser(UserCreateRequest userCreateRequest){
        return User.builder()
                .name(userCreateRequest.name())
                .email(userCreateRequest.email())
                .password(userCreateRequest.password())
                .build();

    }

    public UserResponse fromUser(User user){
        return new UserResponse(
                user.getId().toString(),
                user.getName(),
                user.getEmail(),
                user.getRoles(),
                user.getPassword()
        );
    }
}
