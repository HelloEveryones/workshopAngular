import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit{
constructor(private api:ApiserviceService){}
ngOnInit(): void {
  this.api.getPosts().subscribe(posts=>{
    console.log(posts);
    
  })
}
}
