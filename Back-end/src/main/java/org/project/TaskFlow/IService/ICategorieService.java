package org.project.TaskFlow.IService;

import org.project.TaskFlow.Payload.Request.CategorieRequest;
import org.project.TaskFlow.Payload.Response.CategorieResponse;

import java.util.List;

public interface ICategorieService {

    void createCategorie(CategorieRequest categorieRequest);
    CategorieResponse updateCategorie(String id,CategorieRequest categorieRequest);
    void deleteCategorie(String id);
    CategorieResponse getCategorie(String id);
    List<CategorieResponse> getCategories();
}
