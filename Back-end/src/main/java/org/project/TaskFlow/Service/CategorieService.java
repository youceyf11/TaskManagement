package org.project.TaskFlow.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.project.TaskFlow.Entity.Categorie;
import org.project.TaskFlow.IService.ICategorieService;
import org.project.TaskFlow.Payload.Mapper.CategorieMapper;
import org.project.TaskFlow.Payload.Request.CategorieRequest;
import org.project.TaskFlow.Payload.Response.CategorieResponse;
import org.project.TaskFlow.Repository.CategorieRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategorieService implements ICategorieService {

    private final CategorieRepository categorieRepository;
    private final CategorieMapper categorieMapper;

    @Override
    @Transactional      //dans tout ce qui affect la base de donnee (des changements )
    public void createCategorie(CategorieRequest categorieRequest) {
        Categorie categorie = categorieMapper.toCategorie(categorieRequest);
        categorieRepository.save(categorie);
    }

    @Override
    @Transactional
    public CategorieResponse updateCategorie(String id, CategorieRequest categorieRequest) {
        Categorie categorie = categorieRepository.findById(UUID.fromString(id))
                .orElseThrow();
        categorie.setName(categorieRequest.name());
        categorieRepository.save(categorie);
        return categorieMapper.fromCategorie(categorie);
    }

    @Override
    @Transactional
    public void deleteCategorie(String id) {
        Categorie categorie= categorieRepository.findById(UUID.fromString(id))
                .orElseThrow();
        categorieRepository.delete(categorie);
    }

    @Override
    public CategorieResponse getCategorie(String id) {
        Categorie categorie= categorieRepository.findById(UUID.fromString(id))
                .orElseThrow();
        return categorieMapper.fromCategorie(categorie);
    }

    @Override
    public List<CategorieResponse> getCategories() {
        return categorieRepository.findAll()
                .stream()
                .map(categorieMapper::fromCategorie)
                .collect(Collectors.toList());
    }
}
