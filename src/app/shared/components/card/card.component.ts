import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true }) imgPath: string = '';
  @Input({ required: false }) alt: string = '';
  @Input({ required: true }) title: string = '';
}
