import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() deleted: EventEmitter<string> = new EventEmitter<string>();
  
  
  
  constructor() { }

  ngOnInit(): void {
  }

  deletePost(deleted) {
    this.deleted.emit(this.post.thought);
  }

}
