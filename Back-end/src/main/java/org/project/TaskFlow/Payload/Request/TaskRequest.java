package org.project.TaskFlow.Payload.Request;

import jakarta.validation.constraints.NotNull;
import org.project.TaskFlow.Enum.EPriorite;
import org.project.TaskFlow.Enum.EStatut;

import java.time.LocalDate;

public record TaskRequest(
        @NotNull
        String title,

        @NotNull
        String description,

        @NotNull
        EPriorite priorite,

        @NotNull
        EStatut statut,

        @NotNull
        LocalDate dateEcheance,

        @NotNull
        String categorieId
) {
}
