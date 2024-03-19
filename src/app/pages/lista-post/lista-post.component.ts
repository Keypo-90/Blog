import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/Blog.interface';


@Component({
  selector: 'lista-post',
  standalone: true,
  imports: [],
  templateUrl: './lista-post.component.html',
  styleUrl: './lista-post.component.css'
})
export class ListaPostComponent {

  arrPost: Post[] = [];

  PostService = inject(PostsService);

  ngOnInit() {
    this.arrPost = this.PostService.getAll();
  }
  onChange($event: any) {
    if ($event.target.value === 'todas') {
      this.arrPost = this.PostService.getAll();
    } else {
      this.arrPost = this.PostService.getByCategoria($event.target.value);
    }
  }

}
