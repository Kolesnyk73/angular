import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../../../Models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  constructor(private http: HttpClient) { }

  getPostOfUserById(id): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
