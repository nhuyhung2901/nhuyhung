import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  keyword:any;
  @Input() todos:any;
  @Output() outputAddTodo: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    var newTodo = {
      isEdit: false,
      id: this.todos.length + 1,
      title: this.keyword,
      createDate: "01/04/2021",
      completed: false
    }
    this.outputAddTodo.emit(newTodo);
  }
}
