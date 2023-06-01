import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [{path:'post',component:PostsComponent},{path:'addpost',component:AddPostsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
