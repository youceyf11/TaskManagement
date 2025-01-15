package org.project.TaskFlow.Entity;


import jakarta.persistence.*;
import lombok.*;
import org.project.TaskFlow.Enum.EPriorite;
import org.project.TaskFlow.Enum.EStatut;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
@Entity
@Data
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)    //generating the id as UUID in hibernate
    private UUID id;      //UUID makes the id unique

    @Column(nullable = false)     //can't be null
    private String title;

    private String description;

    private LocalDate dateEcheance;

    @Enumerated(EnumType.STRING)    //saving the EPrioritie content as string in DB
    private EPriorite priorite;

    @Enumerated(EnumType.STRING)
    private EStatut statut;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "categorie_id")
    private Categorie categorie;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;


}
