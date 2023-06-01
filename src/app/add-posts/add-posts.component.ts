import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css'],
})
export class AddPostsComponent implements OnInit {
  constructor(private post: CrudService) {}
  Postform!: FormGroup;
  ngOnInit(): void {
    this.Postform = new FormGroup({
      id: new FormControl(),
      user_id: new FormControl(),
      title: new FormControl(),
      body: new FormControl(),
    });
  }



  SubmitPost() {
    console.log(this.Postform.value)
    this.post
      .AddPost(this.Postform.value)
      .subscribe((message) => console.log(message));
  }
}
