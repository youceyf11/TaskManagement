package org.project.TaskFlow.Payload.Request;

import org.project.TaskFlow.Enum.ERole;

import java.util.Set;

public record UserCreateRequest(
        String name,
        String email,
        String password
) {
}
