package com.mrmodise.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Task {

    @Id
    @GeneratedValue
    private Long id;
    private String taskName;
    @JsonFormat(pattern = "MM/dd/YYYY", shape = JsonFormat.Shape.STRING)
    private Date dueDate;
    private boolean isCompleted;
}
