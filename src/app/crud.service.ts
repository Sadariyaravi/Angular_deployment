import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Posts from './Iposts';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private httpclient: HttpClient) {}

  getPost() {
    let api_key =
      '91d3a8a9184bb265fa163878dd48c0c166e2debf8fcab7c526466f46ba027289';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${api_key}`,
    });
    const requestOptions = { headers: headers };
    return this.httpclient.get<Posts[]>(
      'https://gorest.co.in/public/v2/posts',
      requestOptions
    );
  }
  AddPost(Post: Posts) {
    let api_key =
      '91d3a8a9184bb265fa163878dd48c0c166e2debf8fcab7c526466f46ba027289';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${api_key}`,
    });
    const requestOptions = { headers: headers };
    return this.httpclient.post(
      'https://gorest.co.in/public/v2/posts',
      Post,
      requestOptions
    );
  }

  DeletePosts(id:number) {
    let api_key =
      '91d3a8a9184bb265fa163878dd48c0c166e2debf8fcab7c526466f46ba027289';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${api_key}`,
    });
    const requestOptions = { headers: headers };
    return this.httpclient.delete(`https://gorest.co.in/public/v2/posts/${id}`,requestOptions)
  }

  PutPost(Post:Posts){
    let api_key =
      '91d3a8a9184bb265fa163878dd48c0c166e2debf8fcab7c526466f46ba027289';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${api_key}`,
    });
    const requestOptions = { headers: headers };
    return this.httpclient.put('https://gorest.co.in/public/v2/posts/'+Post.id,Post,requestOptions)
  }
}
