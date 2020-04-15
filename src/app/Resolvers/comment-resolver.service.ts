import { Injectable } from '@angular/core';
import {CommentService} from '../services/comment.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CommentModel} from '../../Models/commentModel';
import {resolve} from 'url';
import {Observable} from 'rxjs';
import {UserModel} from '../../Models/userModel';
import {state} from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService  implements Resolve<CommentModel[]> {

  constructor(private commentService: CommentService) {}
  resolve(){
    return this.commentService.getAllComments();
 }
}
