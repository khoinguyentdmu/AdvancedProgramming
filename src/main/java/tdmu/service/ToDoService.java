package tdmu.service;

import tdmu.model.ToDo;

import java.util.List;

public interface ToDoService {

    List<ToDo> findAll();

    String createToDo(ToDo toDo);
}
