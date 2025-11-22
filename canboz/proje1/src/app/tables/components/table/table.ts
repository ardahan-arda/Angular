import { Component } from "@angular/core";

@Component({
   selector: "app-table",
   imports: [],
   templateUrl: "./table.html",
   styleUrl: "./table.css",
})
export class Table {
   data: any = [
      { fullName: "Ardahan Arda", age: 30, job: "Mekatronik Mühendisi", employed: "Evet" },
      { fullName: "Gülhizar Arda", age: 30, job: "Biyolog", employed: "Hayır" },
      { fullName: "Duru Arda", age: 2, job: "Bebek", employed: "Hayır" },
   ];

   headers = [
      { key: "employed", label: "Aldığı ücretten memnun mu?" },
      { key: "fullName", label: "Ad Soyad" },
      { key: "age", label: "Yaş" },
      { key: "job", label: "Meslek" },
   ];
}
