import { Component, Input} from '@angular/core';
import {CommentModel} from '../../Models/commentModel';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Input()
  comment: CommentModel;

  constructor() {
  }
}



