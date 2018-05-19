package com.mrmodise.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Task {

    @Id
    @GeneratedValue
    private Long id;
    private String taskName;
    @JsonFormat(pattern = "MM/dd/YYYY")
    private LocalDate dueDate;
    private boolean isCompleted;
}
