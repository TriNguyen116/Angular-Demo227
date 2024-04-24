import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostListComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  title = 'Post'
  message = 'from message post'
  postParentMessage = 'message coming from paren Post'
  childPost = 'from chiled post to parent app'
  outputChildMessage = 'Message from Child Post Component Vie Ouput'
  @Input() fromParent = '';
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }
}
