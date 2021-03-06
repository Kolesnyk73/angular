import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommentModel} from '../../Models/commentModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) {
  }

  getAllComments(): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`https://jsonplaceholder.typicode.com/comments`);
  }

}
