import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: Http) { }

  getComment() {
    return this.http.get(this.url);
  }

  createPostServ(post) {
   return this.http.post(this.url, JSON.stringify(post));
  }
}
