import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true }) cardTitle: string = '';
  @Input({ required: true }) cardImagePath: string = '';
  @Input({ required: true }) cardDescription: string = '';
}
