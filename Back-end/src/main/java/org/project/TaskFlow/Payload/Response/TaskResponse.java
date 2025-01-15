package org.project.TaskFlow.Payload.Response;

import org.project.TaskFlow.Enum.EPriorite;
import org.project.TaskFlow.Enum.EStatut;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record TaskResponse(
        String id,
        String title,
        String description,
        LocalDate dateEcheance,
        EPriorite priorite,
        EStatut statut,
        String categorieId,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {




}
