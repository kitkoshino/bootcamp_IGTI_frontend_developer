import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria-component',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.css'],
})
export class GaleriaComponentComponent {
  @Input() title: string;
  @Input() pictures?: string[];
  counter: number = 0;
  show: boolean = true;

  changePicture(value: number) {
    this.counter = this.counter + value;

    if (this.counter + 1 === this.pictures.length) {
      this.counter = this.counter;
    }
  }

  firstPicture() {
    this.counter = 0;
  }

  lastPicture() {
    this.counter = this.pictures.length - 1;
  }
}
