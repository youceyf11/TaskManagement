package org.project.TaskFlow.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.project.TaskFlow.Entity.Categorie;
import org.project.TaskFlow.Entity.Task;
import org.project.TaskFlow.IService.ITaskService;
import org.project.TaskFlow.Payload.Mapper.TaskMapper;
import org.project.TaskFlow.Payload.Request.TaskRequest;
import org.project.TaskFlow.Payload.Response.TaskResponse;
import org.project.TaskFlow.Repository.CategorieRepository;
import org.project.TaskFlow.Repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TaskService implements ITaskService {

    private final TaskRepository taskRepository;
    private final CategorieRepository categorieRepository;
    private final TaskMapper taskMapper;

    @Override
    @Transactional
    public void createTask(TaskRequest taskRequest) {
        Task task = taskMapper.toTask(taskRequest);

        Categorie categorie = categorieRepository.findById(UUID.fromString(taskRequest.categorieId()))
                .orElse(null);
        task.setCategorie(categorie);

        taskRepository.save(task);
    }
    @Override
    @Transactional
    public TaskResponse updateTask(String id, TaskRequest taskRequest) {
        Task task=taskRepository.findById(UUID.fromString(id))
                .orElseThrow();
        task.setTitle(taskRequest.title());
        task.setPriorite(taskRequest.priorite());
        task.setDescription(taskRequest.description());
        task.setStatut(taskRequest.statut());
        task.setDateEcheance(taskRequest.dateEcheance());
        Categorie categorie = categorieRepository.findById(UUID.fromString(taskRequest.categorieId()))
                .orElse(null);
        task.setCategorie(categorie);
        taskRepository.save(task);
        return taskMapper.fromTask(task);
    }

    @Override
    @Transactional
    public void deleteTask(String id) {
        Task task=taskRepository.findById(UUID.fromString(id))
                .orElseThrow();
        taskRepository.delete(task);

    }

    @Override
    public TaskResponse getTask(String id) {
        Task task= taskRepository.findById(UUID.fromString(id))
                .orElseThrow();
        return taskMapper.fromTask(task);
    }

    @Override
    public List<TaskResponse> getTasks() {
        return taskRepository.findAll()
                .stream()
                .map(taskMapper::fromTask)
                .collect(Collectors.toList());
    }
}
