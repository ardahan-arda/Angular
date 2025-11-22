import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: ` <ul>
    @for(data of todos;track data){
    <!-- Döngüdeki elemanların değişimini neye göre takip edeceğini track bölümü belirler -->
    <li>
      index: {{ $index }}, İlk Kayıt mı?: {{ $first }}, Son Kayıt mı?: {{ $last }}, Veri: {{ data }}
    </li>
    }
    <!-- $index: elemanın indexi , $first: 1.eleman mı (true,false) $last: son eleman mı(true,false) -->
  </ul>`,
  styleUrl: './app.css',
})
export class App {
  todos: TodoModel[] = [
    { work: 'Example 1', isCompleted: true },
    { work: 'Example 2', isCompleted: true },
    { work: 'Example 3', isCompleted: true },
  ];

  constructor() {
    this.save();
  }

  save() {
    console.log('----- For Döngüsü -----');
    for (let i = 0; i < 10; i++) {
      // 1
      console.log(i);
    }

    console.log('----- Listeyi For ile Dönme -----');
    for (let i = 0; i < this.todos.length; i++) {
      // 2
      console.log(this.todos[i].work);
    }

    console.log('----- Listeyi ForEach ile Dönme -----');
    this.todos.forEach((val) => {
      // 3
      console.log(val.work);
    });

    console.log('----- Listeyi For ile Dönme (ForEach gibi) -----');
    for (let data of this.todos) {
      // 4: 2 ve 3 ile aynı işi yapar
      console.log(data.work);
    }

    console.log('----- Listeyi For ile Index Alarak Dönme (ForEach gibi) -----');
    for (let index in this.todos) {
      // 5: 2, 3 ve 4 ile aynı işi yapar. Indexini alarak döner.
      console.log(this.todos[index].work + ' Index: ' + index);
    }
  }
}

export class TodoModel {
  work: string | undefined;
  isCompleted: boolean | undefined;
}
