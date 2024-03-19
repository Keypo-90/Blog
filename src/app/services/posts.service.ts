
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/Blog.interface';
import { POST } from '../post.data';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  getAll(): Post[] {

    return POST;
  }

  arrPost: Post[] = []

  getByCategoria(categoria: string): Post[] {
    return POST.filter(post => post.categoria === categoria);
  }

  create(post: Post) {
    POST.push(post);
  }
}
