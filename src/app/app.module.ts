import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {UserService} from './service/user/user.service';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserComponent} from './components/user/user.component';
import {PostService} from './service/post/post.service';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import { PostComponent } from './components/post/post.component';
import {CommentService} from './service/comment/comment.service';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent,
    AllCommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: AllUsersComponent,
        resolve: {usersResol: UserService},
        children: [
          { path: ':id', component: UserComponent  }
        ]
      },
      {
        path: 'posts',
        component: AllPostsComponent,
        resolve: {postsResol: PostService},
        children: [
          {path: ':id', component: PostComponent}
        ]
      },
      {
        path: 'comments',
        component: AllCommentsComponent,
        resolve: {commentsResol: CommentService},
        children: [
          {path: ':id', component: CommentComponent}
        ]
      },

    ])
  ],
  providers: [
    UserService,
    PostService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
