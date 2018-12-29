import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCommentService {
  private urlUserComment = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  constructor(private http : Http) { }

  getUserComment() {
   return this.http.get(this.urlUserComment);
  }
}
