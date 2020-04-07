import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentService} from './services/comment.service';
import {PostServiceService} from './services/PostService/post-service.service';
import {PostModel} from '../Models/PostModel';
import {CommentModel} from '../Models/commentModel';

@Component({
  selector: 'app-root',
  template: `<app-comment *ngFor="let com of comments" [comment]="com" ></app-comment>
  <app-post *ngFor="let p of posts" [post]="p" ></app-post>`,
  styles: [],
})
export class AppComponent {
  title = 'angular';
  comments: CommentModel;
  posts: PostModel[];
  constructor(private commentService: CommentService, private postService: PostServiceService) {
      this.commentService.getAllComments().subscribe(value => this.comments = value);
      this.postService.getAllPosts().subscribe(value => this.posts = value);
  }
}

