import { Component } from '@angular/core';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-todo';

  job: string = "";
  todos: Item[] = [];

  removeItem(i: number): void {
    this.todos.splice(i, 1);
  }

  addItem() {
    if (this.job.length == 0) return;
    
    const item: Item = { task: this.job, isDone: false };

    this.todos.push(item);
    this.job = '';
  }
}
