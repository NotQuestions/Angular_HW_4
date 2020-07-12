import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../service/user/user.service';
import {User} from '../../models/User';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/Post';
import {PostService} from '../../service/post/post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  // constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  //   activatedRoute.params.subscribe(value => {
  //     userService.getSinglUser(value.id).subscribe(user => this.user = user);
  //   });
  // }


  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    activatedRoute.params.subscribe(params => {
      this.user = history.state.user;
    });


  }

  ngOnInit(): void {
  }

}
