import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './Post/post/post.component';
import { UserComponent } from './user/user.component';
import {RouterModule} from '@angular/router';
import {CommentResolverService} from './Resolvers/comment-resolver.service';
import { SingleCommentComponent } from './single-comment/single-comment.component';
import {PostResolverService} from './Resolvers/post-resolver.service';
import {UsersResolverService} from './Resolvers/users-resolver.service';

const routes = [
  // {path: 'comments', component: CommentComponent, resolve: {allComments: CommentResolverService}},
  {path: 'users', component: UserComponent, resolve: {allUsers: UsersResolverService}, children: [
      {path: ':id/posts', component: PostComponent, resolve: {posts: PostResolverService}}
    ]},
  // {path: 'posts', component: PostComponent, resolve: {allPosts: PostResolverService}}
];

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    PostComponent,
    UserComponent,
    SingleCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
