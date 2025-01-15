package org.project.TaskFlow.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.project.TaskFlow.Entity.User;
import org.project.TaskFlow.IService.IUserService;
import org.project.TaskFlow.Payload.Mapper.UserMapper;
import org.project.TaskFlow.Payload.Request.CategorieRequest;
import org.project.TaskFlow.Payload.Request.UserCreateRequest;
import org.project.TaskFlow.Payload.Request.UserRequest;
import org.project.TaskFlow.Payload.Response.UserResponse;
import org.project.TaskFlow.Repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void createUser(UserCreateRequest userCreateRequest){
        User user = userMapper.toUser(userCreateRequest);
        user.setPassword(passwordEncoder.encode(userCreateRequest.password()));
        userRepository.save(user);
    }

    @Override
    @Transactional
    public UserResponse updateUser(String id, UserRequest userRequest){
        User user= userRepository.findById(UUID.fromString(id))
                .orElseThrow();
        user.setName(userRequest.name());
        userRepository.save(user);
        return userMapper.fromUser(user);
    }

    @Override
    @Transactional
    public void deleteUser(String id) {
        User user= userRepository.findById(UUID.fromString(id))
                .orElseThrow();
        userRepository.delete(user);
    }

    @Override
    public List<UserResponse> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(userMapper::fromUser)
                .collect(Collectors.toList());
    }

    @Override
    public UserResponse getUserById(String id) {
        User user= userRepository.findById(UUID.fromString(id))
                .orElseThrow();
        return userMapper.fromUser(user);
    }


}
