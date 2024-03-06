import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts:Post []=[]
  constructor(private api: ApiserviceService) {}
  ngOnInit(): void {
    this.api.getPosts(5).subscribe((posts) => {
      this.posts=posts
      console.log(posts);
      
    });
  }
}
