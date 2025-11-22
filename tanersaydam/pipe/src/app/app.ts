import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoPipe } from './todo-pipe';
import { NamePipe } from './name-pipe';

@Component({
  selector: 'app-root',
  imports: [FormsModule, TodoPipe, NamePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  work: string | undefined;
  todos: string[] = ['Elma', 'Armut', 'Domates'];
  search: string = '';
  name: string = 'Ardahan Arda';

  save() {
    if (this.work) {
      this.todos.push(this.work);
      this.work = '';
    }
  }
}
