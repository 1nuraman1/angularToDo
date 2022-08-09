import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/model';
import { ToDoItem } from 'src/app/toDoModel';

@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.css']
})
export class ToDoAppComponent  {

  constructor() { 
    this.model.items = this.getItemsFromLS();
  }

  displayAll: boolean = false;
  inputText: string = '';

model = new Model();
 

  addItem (){
    if (this.inputText !== ''){
      let data = {description: this.inputText, action: false};
      this.model.items.push(data);
      let items = this.getItemsFromLS();
      items.push(data);
      localStorage.setItem("items",JSON.stringify(items));
      this.inputText = '';
    } else {
      alert('please fill out this field')
    }

  }

  getItemsFromLS(){
      let items: ToDoItem[] = [];
      let value = localStorage.getItem('items')
      if(value != null){
        items = JSON.parse(value);
      }
      return items;
  }

  onActionChanged(item: ToDoItem){
    let items = this.getItemsFromLS();
    localStorage.clear;

    items.forEach(i => {
      if(i.description == item.description){
        i.action = item.action;
      }
    });
    localStorage.setItem("items",JSON.stringify(items));
  }

  getItem() {
    if(this.displayAll){
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action)
  }

  displayCount() {
    return this.model.items.filter(i => i.action).length;
  }

}
