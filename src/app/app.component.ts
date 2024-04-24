import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NavbarComponent, PostComponent, PostListComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage = 'Message coming from parent component App'
  message = '';
  fromChildOuput = '';
  bool = false;
  username = '';
  textValue = 'Value is coming from component';

  @ViewChild(PostComponent) childComp!: PostComponent;
  constructor() {
    console.log(this.childComp);

  }

  ngAfterViewInit() {
    console.log(this.childComp);
    this.message = this.childComp.childPost;
  }

  reciveMessage($event: string) {
    // console.log($event);
    this.fromChildOuput = $event;
  }

  buttonClick() {
    console.log('clicked')
  }

  onKeyup() {
    console.log(this.textValue);

  }
}
