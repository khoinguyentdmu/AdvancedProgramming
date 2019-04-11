package tdmu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tdmu.model.ToDo;
import tdmu.service.ToDoService;

import java.util.List;

@RestController
@RequestMapping("/todo")
public class ToDoListController {

    @Autowired
    private ToDoService toDoService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<ToDo> getAll() {
        return toDoService.findAll();
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public String createToDo(@RequestBody ToDo toDo) {
        return toDoService.createToDo(toDo);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteToDo(@PathVariable Long id) {
        toDoService.deleteTodo(id);
    }
}