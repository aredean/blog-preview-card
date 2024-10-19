import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Card, Author, Link } from './blog-preview-card';


@Component({
  selector: 'app-blog-preview-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './blog-preview-card.component.html',
  styleUrl: './blog-preview-card.component.scss'
})
export class BlogPreviewCardComponent {

  @Input() data : Card | undefined;


  generateSampleDate(){
    const data:Card = {
      title : "HTML & CSS foundations",
      description : "These languages are the backbone of every wrbsite, defining structure, content, and presentation.",
      date : '2023-12-21',
      image : "/images/illustration-article.svg",
      categories : [
        {
          title : "Learning",
        },
      ],
      author : {
        name : "Greg Hooper",
        image : "/images/image-avatar.webp"
      }
    }
    this.data = data;
  }

  ngOnInit(){
    if (!this.data){
      this.generateSampleDate();
    }
  }

}
