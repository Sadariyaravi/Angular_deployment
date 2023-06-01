import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import Posts from './Iposts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'HttpClient';

  constructor(private Post: CrudService) {}
  ngOnInit(): void {
    this.getPost()
  }
  PostData: Array<Posts> = [];
  Search: string = '';
  getPost() {
    this.Post.getPost().subscribe((posts) => {
      this.PostData = posts;
    });
  }

  SearchData(text: string) {
   this.PostData.filter((item) => {
      if (item.title.toLowerCase().includes(text.toLowerCase())) {
        console.log(item)
      }
    });
  }
}
