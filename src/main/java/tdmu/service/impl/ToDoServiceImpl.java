package tdmu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tdmu.model.ToDo;
import tdmu.repository.ToDoRepository;
import tdmu.service.ToDoService;

import java.util.List;

@Service
public class ToDoServiceImpl implements ToDoService {

    @Autowired
    private ToDoRepository toDoRepository;

    public List<ToDo> findAll() {
        return toDoRepository.findAll();
    }

    public void createToDo(ToDo toDo) {

        toDo.setCreated_at(System.currentTimeMillis());
        ToDo savedToDo = toDoRepository.save(toDo);

//        return "Create successfully!";
    }

    public void deleteTodo(Long id) {

        toDoRepository.deleteById(id);
    }
}
