package org.project.TaskFlow.IService;

import org.project.TaskFlow.Payload.Request.TaskRequest;
import org.project.TaskFlow.Payload.Response.TaskResponse;

import java.util.List;

public interface ITaskService {

    void createTask(TaskRequest taskRequest);
    TaskResponse updateTask(String id, TaskRequest taskRequest);
    void deleteTask(String id);
    TaskResponse getTask(String id);
    List<TaskResponse> getTasks();

}
