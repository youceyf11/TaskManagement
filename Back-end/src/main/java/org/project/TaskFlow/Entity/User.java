package org.project.TaskFlow.Entity;

import jakarta.persistence.*;
import lombok.*;
import org.project.TaskFlow.Enum.ERole;

import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @ElementCollection
    private Set<ERole> roles;

    @Column(nullable = false)
    private String password;

}
