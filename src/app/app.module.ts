import { HomeComponent } from './home/home.component';
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
import { NavComponent } from './nav/nav.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    UsersComponent,
    UserCommentComponent,
    HomeComponent,
    NavComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'post', component: PostComponent },
      { path: 'users', component: UsersComponent },
      { path: 'usersComment', component: UserCommentComponent },
      { path: 'comment', component: CommentComponent  },
      { path: '**', component: NotfoundComponent  }
    ])
    
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
