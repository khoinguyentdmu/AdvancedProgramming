package tdmu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
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
    public String createStudent(@RequestBody ToDo toDo) {
        return toDoService.createToDo(toDo);
    }
}