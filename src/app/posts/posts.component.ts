import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudService } from '../crud.service';
import Posts from '../Iposts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  UPostform!: FormGroup;
  constructor(private Post: CrudService) {
    this.UPostform = new FormGroup({
      id: new FormControl(),
      user_id: new FormControl(),
      title: new FormControl(),
      body: new FormControl(),
    });
  }
  PostData: Array<Posts> = [];
  Search: string = '';
  Flag: boolean = false;
  ngOnInit(): void {
    this.GetPosts();
  }
  GetPosts() {
    this.Post.getPost().subscribe((posts: Array<Posts>) => {
      this.PostData = posts;
    });
  }

  DeletePost(id: number) {
    this.Post.DeletePosts(id).subscribe(() => {
      this.GetPosts();
    });
  }

  ShowPost(Post: Posts) {
    this.Flag = true;
    let ShowPost = this.PostData.find((p) => p.id == Post.id);
    this.UPostform.setValue({
      user_id: ShowPost?.user_id,
      title: ShowPost?.title,
      body: ShowPost?.body,
      id: ShowPost?.id,
    });
  }

  UpdatePost() {
    this.Flag = false;
    this.Post.PutPost(this.UPostform.value).subscribe(() => {
      this.GetPosts();
    });
  }

get SearchData() {
    return this.PostData.filter((item) => {
      return item.title.toLowerCase().includes(this.Search.toLowerCase()) || item.body.toLowerCase().includes(this.Search.toLowerCase());
    });
  }
}
