package org.project.TaskFlow.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.HashMap;
import java.util.Map;

@RestController
public class DataController {

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/api/data")
    public Map<String, String> getData() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello from the server!");
        return response;
    }
}