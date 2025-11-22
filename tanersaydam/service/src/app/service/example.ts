import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Example {
  work: string | undefined;
  todos: string[] = [];

  constructor() {}

  save() {
    if (!this.work) {
      return;
    }

    this.todos.push(this.work);
  }
}
