import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: Comment[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.data.subscribe(value => this.comments = value.commentsResol);
  }

  ngOnInit(): void {
  }

  DetailsComment(comment: Comment): void {
    this.router.navigate(['comments', comment.id], {state: {comment}});
  }
}
