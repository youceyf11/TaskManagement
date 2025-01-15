package org.project.TaskFlow.Payload.Mapper;

import lombok.Setter;
import org.project.TaskFlow.Entity.Categorie;
import org.project.TaskFlow.Payload.Request.CategorieRequest;
import org.project.TaskFlow.Payload.Response.CategorieResponse;
import org.springframework.stereotype.Service;

@Service
public class CategorieMapper {
    public Categorie toCategorie(CategorieRequest categorieRequest){
        return Categorie.builder()
                .name(categorieRequest.name())
                .build();
    }
    public CategorieResponse fromCategorie(Categorie categorie){
        return new CategorieResponse(
                categorie.getId().toString(),
                categorie.getName()
        );

    }
}
