import { DecimalPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: ` <h1>Kredi hesaplama</h1>

    <div>
      <div>
        <label>Kredi Tutarı</label>
        <input [(ngModel)]="krediTutari" />
      </div>
      <div>
        <label>Taksit Sayısı</label>
        <select
        [(ngModel)]="taksitSayisi">
          @for(data of taksitler;track data)
          {
          <option>{{ data }}</option>
          }
        </select>
      </div>
      <button (click)="hesapla()">Hesapla</button>
    </div>
    <hr />
    <div>{{ sonuc }}</div>
    <hr />
    <table>
      <thead>
        <tr>
          <th>Taksit Sayısı</th>
          <th>Taksit Tutarı</th>
          <th>Kalan Geri Ödeme</th>
        </tr>
      </thead>
      <tbody>
        @for(data of odemePlani;track data){
        <tr>
          <td>{{ $index + 1 }}</td>
          <td>{{ data.taksitTutari }}</td>
          <td>{{ data.kalanGeriOdeme }}</td>
        </tr>
        }
      </tbody>
    </table>`,
  styleUrl: './app.css',
})
export class App {
  krediTutari: number | undefined;
  taksitSayisi: number | undefined = 3;
  taksitler: number[] = [3, 6, 12, 24];
  sonuc: string | undefined;
  odemePlani: { taksitTutari: number; kalanGeriOdeme: number }[] | undefined;

  hesapla() {
    if (!this.krediTutari || !this.taksitSayisi) {
      return;
    }

    const taksitTutari: number = (this.krediTutari / this.taksitSayisi) * 1.29;
    let toplamGeriOdeme: number = taksitTutari * this.taksitSayisi;

    this.sonuc = `Taksit Tutarı: ${taksitTutari} - Taksit Sayısı: ${this.taksitSayisi} - Toplam Geri Ödeme: ${toplamGeriOdeme}`;

    this.odemePlani = [];
    for (let i = 0; i < this.taksitSayisi; i++) {
      toplamGeriOdeme -= taksitTutari;
      const data = {
        taksitTutari: taksitTutari,
        kalanGeriOdeme: toplamGeriOdeme,
      };
      this.odemePlani.push(data);
    }
  }
}
