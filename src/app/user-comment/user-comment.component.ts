import { UserCommentService } from './../services/user-comment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent implements OnInit {
  userComments: any[];
  constructor(private service: UserCommentService) { }

  ngOnInit() {
    this.service.getUserComment()
    .subscribe(Response => {
      this.userComments = Response.json();
      console.log(Response.json());
    })
  }

}
