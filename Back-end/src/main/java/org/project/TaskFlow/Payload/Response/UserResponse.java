package org.project.TaskFlow.Payload.Response;

import org.project.TaskFlow.Enum.ERole;

import java.util.Set;

public record UserResponse(
        String id,
        String name,
        String email,
        Set<ERole> roles,
        String password
) {
}
