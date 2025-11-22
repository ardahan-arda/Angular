import { NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <h1 class="deneme" style="color: red;" [style]="setBg()">Todo App</h1>
    @if(!isUpdateWorkFormActive) {
    <div>
      <label>Work</label>
      <input [(ngModel)]="work" />
      <button (click)="save()">Save</button>
    </div>
    }@else {
    <div>
      <label>Update Work</label>
      <input [(ngModel)]="updateWork" />
      <button (click)="update()">Update</button>
    </div>
    }
    <hr />
    <div>
      <ul>
        @for(data of todos;track data) {
        <li>
          {{ data }}
          @if(!isUpdateWorkFormActive){
          <button (click)="get($index)">Update</button>
          <button (click)="delete($index)">Delete</button>
          }
        </li>
        }
      </ul>
    </div>
  `,
})
export class App {
  work: string = '';
  updateWork: string = '';
  updateIndexNumber: number = 0;
  isUpdateWorkFormActive: boolean = false;
  todos: string[] = [];

  save() {
    this.todos.push(this.work);
    this.work = '';
  }

  delete(index: number) {
    this.todos.splice(index, 1);
  }

  get(index: number) {
    this.updateIndexNumber = index;
    this.isUpdateWorkFormActive = true;
    this.updateWork = this.todos[index];
  }

  update() {
    this.isUpdateWorkFormActive = false;
    this.todos[this.updateIndexNumber] = this.updateWork;
  }

  setBg() {
    return { backgroundColor: 'blue', color: 'white' };
  }
}
