package org.project.TaskFlow.Component;

import lombok.RequiredArgsConstructor;
import org.project.TaskFlow.Entity.Categorie;
import org.project.TaskFlow.Entity.Task;
import org.project.TaskFlow.Enum.EPriorite;
import org.project.TaskFlow.Enum.EStatut;
import org.project.TaskFlow.Payload.Request.UserCreateRequest;
import org.project.TaskFlow.Repository.CategorieRepository;
import org.project.TaskFlow.Repository.TaskRepository;
import org.project.TaskFlow.Repository.UserRepository;
import org.project.TaskFlow.Service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Component
@RequiredArgsConstructor
public class DataInitialiser implements CommandLineRunner {
    private final TaskRepository taskRepository;
    private final CategorieRepository categorieRepository;
    private final UserService userService;


    @Override
    public void run(String... args) throws Exception {

        List<Categorie> categories = new ArrayList<>();

        for(int i=0; i<10 ;i++){
            categories.add(
                    Categorie.builder()
                            .name("Categorie " + i)
                            .build()
            );
        }
        categories = categorieRepository.saveAll(categories);

        for(int i=0; i<50 ;i++){
            taskRepository.save(
                    Task.builder()
                            .title("title "+i)
                            .description("description"+i)
                            .dateEcheance(LocalDate.now())
                            .priorite(EPriorite.values()[new Random().nextInt(EPriorite.values().length)])
                            .statut(EStatut.values()[new Random().nextInt(EStatut.values().length)])
                            .categorie(categories.get(new Random().nextInt(categories.size())))
                            .build()
            );
        }

        for(int i=0 ; i<10 ; i++){
            userService.createUser(
                    new UserCreateRequest(
                            "name "+i,
                            "youceyfouriniche11"+ i +"@gmail.com",
                            "admin"

                            )
            );
        }
    }
}
