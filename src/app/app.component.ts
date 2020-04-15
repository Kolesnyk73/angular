import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentService} from './services/comment.service';
import {PostServiceService} from './services/PostService/post-service.service';
import {PostModel} from '../Models/PostModel';
import {CommentModel} from '../Models/commentModel';
import {UserService} from './services/user.service';
import {UserModel} from '../Models/userModel';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styles: [],
})
export class AppComponent {
  title = 'angular';
  // comments: CommentModel[];
  // posts: PostModel[];
  // users: UserModel[];
  constructor() {
  }
  // constructor(private commentService: CommentService,
  //             private postService: PostServiceService,
  //             private userService: UserService) {
      // this.commentService.getAllComments().subscribe(value => this.comments = value);
      // this.postService.getAllPosts().subscribe(value => this.posts = value);
      // this.userService.getAllUsers().subscribe(value => this.users = value);
  }


