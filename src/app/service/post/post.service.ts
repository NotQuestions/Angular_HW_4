import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../models/Post';
import {Resolve} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService implements Resolve<Post[]> {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostsOfUser(userId): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  resolve(): Observable<Post[]> {
    return this.getPosts();
  }
}
