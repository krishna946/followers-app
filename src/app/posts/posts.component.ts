import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts;
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _service: CommonService) {}

  ngOnInit(): void {
    this._service.getPosts().subscribe(
      (res) => {
        this.posts = res;
      },
      (error) => {
        console.log(error);
        alert('An unexpected error');
      }
    );
  }
  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    console.log(post);
    if (input.value !== '') {
      this._service.createPost(post).subscribe(
        (res: any) => {
          post['id'] = res;
          this.posts.splice(0, 0, post);
        },
        (error) => {
          console.log(error);
          alert('An unexpected error');
        }
      );
      input.value = '';
    } else {
      alert('Please add data');
    }
  }
  updatePost(data) {
    this._service.updatePost(data).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
        alert('An unexpected error');
      }
    );
  }
  delPost(post) {
    this._service.deletePost(post).subscribe(
      (res) => {
        console.log(res);
        let index = this.posts.indexOf(post);
        console.log(index);
        this.posts.splice(index, 1);
        alert('post deleted succesfully');
      },
      (error) => {
        console.log(error);
        alert('An unexpected error');
      }
    );
  }
}
