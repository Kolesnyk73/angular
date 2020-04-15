import {Component, Input, OnInit} from '@angular/core';
import {CommentModel} from '../../Models/commentModel';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css']
})
export class SingleCommentComponent implements OnInit {

  constructor() { }
  @Input()
  comment: CommentModel;
  ngOnInit() {
  }

}
