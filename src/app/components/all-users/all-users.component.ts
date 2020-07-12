import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user/user.service';
import {User} from '../../models/User';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: User[];
  // constructor(private userService: UserService, private router: Router) {
  //   userService.getUsers().subscribe(users => this.users = users);
  // }
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.data.subscribe(value => {
      this.users = value.usersResol;
    });
  }

  ngOnInit(): void {
  }

  toUserDetails(user: User): void {
    this.router.navigate(['users', user.id], {state: {user}});
  }
}
