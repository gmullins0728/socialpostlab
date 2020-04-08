import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  submitPost(form): void {
    this.submitted.emit(form.value);
    form.reset();
  }
//   posts: Post [] = [];
//   newTitle = '';
//   newThought = '';
//   addThought(newThought): void {
//   this.posts.push({
//     title: this.newTitle,
//     thought: newThought
//   });
//   this.newTitle = '';
//   this.newThought = '';
// }

}
