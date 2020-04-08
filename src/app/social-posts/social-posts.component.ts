import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';


@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[] = [
    { title: 'Grand Circus', thought: 'Grand Circus is a great bootcamp!'},
    { title: 'ToDo', thought: 'Developing a Todo app was a good learning experience.'},
    { title: 'Career Services', thought: 'Soft skills workshop is a very useful resource.'}
  ];

  showPost: boolean = false;
  onSubmit(): void {
    this.showPost = !this.showPost;
  }

  onDelete(post): void {
    this.posts = this.posts.filter(x => x != post);
  }
  constructor() { }

  ngOnInit(): void {
  }

  

}
