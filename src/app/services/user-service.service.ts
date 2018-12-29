import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private urlUser = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: Http) { }

  getUserServ() {
   return this.http.get(this.urlUser);
  }
}
