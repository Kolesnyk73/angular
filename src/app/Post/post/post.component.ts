import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../../Models/PostModel';
import {ActivatedRoute, Router} from '@angular/router';
import {PostServiceService} from '../../services/PostService/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  posts: PostModel[];
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private postService: PostServiceService) {
    // this.activatedRoute
    //   .params
    //   .subscribe(params =>
    //       this.postService
    //         .getPostOfUserById(params.id)
    //         .subscribe(postFromServer => this.post = postFromServer));
    // console.log('lalala');
    // this.posts = this.activatedRoute.snapshot.data.post;
    this.activatedRoute.queryParams.subscribe(q =>
      this.postService
        .getPostOfUserById(q.idOfUser)
        .subscribe(value => console.log(value)));
  }


  ngOnInit() {
  }

}
