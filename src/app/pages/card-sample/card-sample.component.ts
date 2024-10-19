import { Component } from '@angular/core';
import { Card } from '../../components/blog-preview-card/blog-preview-card';
import { sampleCards } from '../../sample-card';
import { BlogPreviewCardComponent } from '../../components/blog-preview-card/blog-preview-card.component';

@Component({
  selector: 'app-card-sample',
  standalone: true,
  imports: [
    BlogPreviewCardComponent
  ],
  templateUrl: './card-sample.component.html',
  styleUrl: './card-sample.component.scss'
})
export class CardSampleComponent {

  cards: Card[] = sampleCards;

}
