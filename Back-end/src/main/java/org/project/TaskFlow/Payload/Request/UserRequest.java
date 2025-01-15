package org.project.TaskFlow.Payload.Request;

import org.project.TaskFlow.Enum.ERole;

import java.util.Set;

public record UserRequest(
        String name,
        String email,
        Set<ERole> roles
) {
}
