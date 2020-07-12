import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../service/comment/comment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-comments-of-post',
  templateUrl: './comments-of-post.component.html',
  styleUrls: ['./comments-of-post.component.css']
})
export class CommentsOfPostComponent implements OnInit {
  comments: Comment[];

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(value => {
      commentService.getCommentsOfPost(value.id).subscribe(comments => {
        this.comments = comments;
      });
    });

  }

  ngOnInit(): void {
  }

}
