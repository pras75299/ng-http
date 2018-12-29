import { UserCommentService } from './services/user-comment.service';
import { CommentService } from './services/comment.service';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { UsersComponent } from './users/users.component';
import { UserServiceService } from './services/user-service.service';
import { UserCommentComponent } from './user-comment/user-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    UsersComponent,
    UserCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PostService,
    CommentService,
    UserServiceService,
    UserCommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
