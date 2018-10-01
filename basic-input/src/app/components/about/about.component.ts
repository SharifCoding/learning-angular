import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  posts: Post[];

  constructor(private dataservice:DataService) {
  }

  ngOnInit() {
    console.log('ngOnInit post ran...');

    this.dataservice.getPosts().subscribe((posts) => {
      console.log('dataservice.getPosts()', posts);
      this.posts = posts;
    })
  }

}

interface Post {
  id: number,
  title: string,
  body: string,
  userid: number,
}