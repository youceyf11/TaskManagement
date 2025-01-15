package org.project.TaskFlow.Payload.Request;

public record LoginRequest(
        String email,
        String password
) {
}
