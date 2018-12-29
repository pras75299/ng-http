import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  constructor(private service: UserServiceService) { }

  ngOnInit() {
    this.service.getUserServ()
    .subscribe(Response => {
      this.users = Response.json();
      //console.log(Response.json());
    })
  }

}
