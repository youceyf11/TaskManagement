package org.project.TaskFlow.Repository;

import org.project.TaskFlow.Entity.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CategorieRepository extends JpaRepository<Categorie, UUID> {

}
