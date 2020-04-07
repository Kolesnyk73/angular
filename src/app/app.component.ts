import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentService} from './services/comment.service';

@Component({
  selector: 'app-root',
  template: `<app-comment *ngFor="let com of comments" [comment]="com" ></app-comment>`,
  styles: [],
})
export class AppComponent {
  title = 'angular';
  comments: CommentModel[];
  constructor(private commentService: CommentService) {
      this.commentService.getAllComments().subscribe(value => this.comments = value);
  }
}

