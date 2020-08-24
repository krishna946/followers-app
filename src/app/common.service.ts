import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }
  getPosts() {
    return this.http.get(this.URL);
  }
  updatePost(post){
    return this.http.patch(this.URL + '/'+ post.id,JSON.stringify(post));
  };
  createPost(post){
    return this.http.post(this.URL,JSON.stringify(post));
  }
  deletePost(post){
    return this.http.delete(this.URL +'/'+post.id)
  }
  getFollowers(){
    return this.http.get('https://restcountries.eu/rest/v2/all')
  }
}
