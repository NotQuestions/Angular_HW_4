import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Resolve} from '@angular/router';
import {Comment} from '../../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService implements Resolve<Comment[]>{

  constructor(private httpClient: HttpClient) { }
  getComments(): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }
  getCommentsOfPost(postId): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }

  resolve(): Observable<Comment[]>{
    return this.getComments();
  }
}
