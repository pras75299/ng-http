import { CommentService } from './../services/comment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: any[];

  constructor(private service: CommentService) { }

  ngOnInit() {
    this.service.getComment()
    .subscribe(Response => {
      this.comments = Response.json();
      //console.log(Response.json());
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';
    this.service.createPostServ(post)
    .subscribe(Response => {
      post['id'] = Response.json().id;
      this.comments.splice(0, 0, post);
    });
  }

  


}
