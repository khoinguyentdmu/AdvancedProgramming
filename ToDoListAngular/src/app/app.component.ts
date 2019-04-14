import { Component } from '@angular/core';
import { Task } from './model/Task';
import { ToDoService } from './service/to-do.service';
import { ToDo } from './model/ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';
  flag = 1;
  toDoTaskCount = 0;
  completedTaskCount = 0;
  // Tasks: Task[] = [];
  // dTask: Task[] = [];
  ToDos: ToDo[] = [];
  taskText: string = "";
  msg: string;
  errMsg: string;
  totalTaskToComplete: number;
  completedTask: number;
  today: number;
  alreadyAddedTask: string;

  constructor(private todoService: ToDoService) { }

  ngOnInit() {
    this.loadToDos();
  }

  loadToDos() {
    this.todoService.getAllToDo().subscribe(data => {
      this.ToDos = data;
    });
  }

  reset() {
    this.taskText = "";
  }

  addTask(msg: string) {

    if (msg.length == 0) {

      this.errMsg = "Task is not clear";
    }
    else if (this.duplicateTask(msg) && this.flag) {
      this.errMsg = "Task is already in the list";
    }

    else {

      this.today = Date.now();
      // this.Tasks.push(new Task(msg, this.toDoTaskCount, this.today));
      this.todoService.postToDo(msg).subscribe(res => { },
        errors => {
          console.error(errors.message);
          this.errMsg = errors.error.text;
        },
        () => {
          this.cleartext();
          this.loadToDos();
          this.totalTaskToComplete = this.ToDos.length;
          this.toDoTaskCount += 1;
        });
    }
  }

  duplicateTask(msg: string): number {
    for (var i = 0; i < this.ToDos.length; i++) {
      if (msg == this.ToDos[i].name) {
        return 1;
      }
    }
    return 0;
  }

  cleartext() {
    this.errMsg = "";
    this.taskText = "";
  }

  deleteToDo(todo: ToDo) {
    this.todoService.deleteToDo(todo.id).subscribe(res => {}, error => {}, () => {
      this.loadToDos();
    });
    this.totalTaskToComplete=this.ToDos.length;
  }

  editTask(todo: ToDo){
    this.taskText=todo.name;
    this.deleteToDo(todo);
    this.totalTaskToComplete=this.ToDos.length;
  }
}
