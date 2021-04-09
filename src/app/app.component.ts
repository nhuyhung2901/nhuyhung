import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularTodo';
  todoList = [{}];
  ngOnInit(): void {
    this.todoList = [
      {
        id: 1,
        title: "todo1",
        createDate: "08/04/2021",
        completed: false
      },
      {
        id: 2,
        title: "todo2",
        createDate: "08/04/2021",
        completed: true
      },
      {
        id: 3,
        title: "todo3",
        createDate: "08/04/2021",
        completed: false
      }
    ]
  }

  newTodo(event:any){
    this.todoList.push(event);
    console.log(this.todoList);
  }
}
