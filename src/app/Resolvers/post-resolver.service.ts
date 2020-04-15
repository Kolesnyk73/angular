import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {PostServiceService} from '../services/PostService/post-service.service';
import {PostModel} from '../../Models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<PostModel[]> {

  constructor(private postService: PostServiceService) { }
  resolve(route: ActivatedRouteSnapshot) {
    const id = +route.paramMap.get('id');
    return this.postService.getPostOfUserById(+id);
  }
}
