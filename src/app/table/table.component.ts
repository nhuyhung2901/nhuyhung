import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  @Input() todos:any;

  constructor() { }
  ngOnInit(): void {
    console.log(this.todos);
    this.todos = this.todos.map((item:any) =>{
      return{
        isEdit: false,
        ...item
      }
    })
  }

  editTodo(todo:any){
    todo.isEdit = true;
  }

  saveTodo(todo:any){
    todo.isEdit = false;
    console.log(todo);
  }

  trashTodo(todo:any){
    var index = this.todos.findIndex((item:any)=>item.id === todo.id)
    this.todos.splice(index, 1);
  }
}
