import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(value => {
      this.post = history.state.post;
    });
  }

  ngOnInit(): void {
  }

}
