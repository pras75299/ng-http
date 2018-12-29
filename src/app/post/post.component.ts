import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService) {
    
   }
   ngOnInit() {
     this.service.getPostServ()
    .subscribe(Response => {
      this.posts = Response.json();
    }, error => {
      alert('An unexpected error occur.');
      console.log(error);
    });
  }
   createPost(input: HTMLInputElement) {
     let post = { title: input.value }
     input.value = '';
      this.service.createPostServ(post)
      .subscribe(Response => {
        post['id'] = Response.json().id;
        this.posts.splice(0, 0, post);
      }, (error: Response) => {
        if(error.status === 404) {
          alert('this post has been already deleted');
        } else {
          alert('An unexpected error occur.');
          console.log(error);
        }       
      });
   }

   updatePost(post) {
     this.service.updatePostServ(post)
     .subscribe(Response => {
       console.log(Response.json());
     }, error => {
      alert('An unexpected error occur.');
      console.log(error);
    });
   }

   deletePost(post) {
     this.service.deletePostServ(post.id)
     .subscribe(Response => {
       let index = this.posts.indexOf(post);
       this.posts.splice(index, 1);
     }, (error: Response) => {
      if(error.status === 404) {
        alert('this post has been already deleted');
      } else {
        alert('An unexpected error occur.');
        console.log(error);
      }       
    });
   }

  

}
