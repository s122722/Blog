import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class BlogComponent {
  blogPosts = [
    { id: 1, title: 'Eerste Week Stage' },
    { id: 2, title: 'Wat ik heb geleerd over Angular' },
    { id: 3, title: 'Projectoverzicht en mijn bijdrage' }
  ];
}
