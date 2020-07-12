import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment: Comment;
  constructor( private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(value => {
     this.comment = history.state.comment;
    });
  }

  ngOnInit(): void {
  }

}
