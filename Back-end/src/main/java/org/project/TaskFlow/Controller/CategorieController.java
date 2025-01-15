package org.project.TaskFlow.Controller;

import lombok.RequiredArgsConstructor;
import org.project.TaskFlow.Payload.Request.CategorieRequest;
import org.project.TaskFlow.Payload.Response.CategorieResponse;
import org.project.TaskFlow.Service.CategorieService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/categorie")
@RequiredArgsConstructor
public class CategorieController {
    private final CategorieService categorieService;

    @PostMapping
    public ResponseEntity<Void> createCategorie(@RequestBody CategorieRequest categorieRequest){
        categorieService.createCategorie(categorieRequest);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<CategorieResponse>> getCategories(){
        return ResponseEntity.ok(categorieService.getCategories());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategorieResponse> getCategorie(@PathVariable("id") String id ){
        return ResponseEntity.ok(categorieService.getCategorie(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategorie(@PathVariable("id") String id){
        categorieService.deleteCategorie(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CategorieResponse> updateCategorie(@PathVariable("id") String id, @RequestBody CategorieRequest categorieRequest){
        return ResponseEntity.ok(categorieService.updateCategorie(id, categorieRequest));
    }

}
