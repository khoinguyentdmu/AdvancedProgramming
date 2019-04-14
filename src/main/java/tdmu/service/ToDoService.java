package tdmu.service;

import tdmu.model.ToDo;

import java.util.List;

public interface ToDoService {

    List<ToDo> findAll();

    void createToDo(ToDo toDo);

    void deleteTodo(Long id);
}
