import {Component, OnInit} from '@angular/core';
import {PostService} from '../../service/post/post.service';
import {Post} from '../../models/Post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: Post [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.data.subscribe(value => {
      this.posts = value.postsResol;
    });
    // postService.getPosts().subscribe(posts => this.posts = posts);
  }

  ngOnInit(): void {
  }

  toPostDetails(post: Post): void {
    this.router.navigate(['posts', post.id], {state: {post}});
  }

  getCommentsOfPost(post: Post): void {
    this.router.navigate(['posts/comments', post.id], {state: {post}});

  }
}
