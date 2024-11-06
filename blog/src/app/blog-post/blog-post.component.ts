import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  templateUrl: './blog-post.component.html', 
  styleUrls: ['./blog-post.component.scss'],
  // imports: [provideHttpClient()]  // werkt niet
})
export class BlogPostComponent implements OnInit {
  postId: number | null = null;
  postContent = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postId = Number(params.get('id'));

      if (this.postId) {
        this.loadPostContent(this.postId);
      } else {
        this.postContent = 'Blogpost niet gevonden.';
      }
    });
  }

  private loadPostContent(id: number): void {
    const filePath = `assets/posts/post-${id}.txt`;

    this.http.get(filePath, { responseType: 'text' }).pipe(
      catchError(() => of('Blogpost niet gevonden.'))
    ).subscribe(content => {
      this.postContent = content;
    });
  }
}
