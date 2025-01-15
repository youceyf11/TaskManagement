package org.project.TaskFlow.IService;

import org.project.TaskFlow.Payload.Request.UserCreateRequest;
import org.project.TaskFlow.Payload.Request.UserRequest;
import org.project.TaskFlow.Payload.Response.UserResponse;

import java.util.List;

public interface IUserService {
    void createUser(UserCreateRequest userCreateRequest);
    UserResponse updateUser(String id, UserRequest userRequest);
    void deleteUser(String id);
    List<UserResponse> getAllUsers();
    UserResponse getUserById(String id);

}
