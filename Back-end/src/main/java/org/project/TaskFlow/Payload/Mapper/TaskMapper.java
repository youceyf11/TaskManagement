package org.project.TaskFlow.Payload.Mapper;


import org.project.TaskFlow.Entity.Task;
import org.project.TaskFlow.Payload.Request.TaskRequest;
import org.project.TaskFlow.Payload.Response.TaskResponse;
import org.springframework.stereotype.Service;

@Service
public class TaskMapper {
    public Task toTask(TaskRequest taskRequest) {
        return Task.builder()
                .title(taskRequest.title())
                .description(taskRequest.description())
                .dateEcheance(taskRequest.dateEcheance())
                .priorite(taskRequest.priorite())
                .statut(taskRequest.statut())
                .categorie(null)
                .build();
    }
    public TaskResponse fromTask(Task task){
        return new TaskResponse(
                task.getId().toString(),
                task.getTitle(),
                task.getDescription(),
                task.getDateEcheance(),
                task.getPriorite(),
                task.getStatut(),
                task.getCategorie() != null ? task.getCategorie().getId().toString() : null,
                task.getCreatedAt(),
                task.getUpdatedAt()
        );
    }
}
