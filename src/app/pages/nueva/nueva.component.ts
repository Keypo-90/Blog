import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nueva.component.html',
  styleUrl: './nueva.component.css'
})
export class NuevaComponent {

  formulario: FormGroup = new FormGroup({
    id: new FormControl(),
    titulo: new FormControl(),
    texto: new FormControl(),
    autor: new FormControl(),
    imagen: new FormControl(),
    categoria: new FormControl()
  })

  PostService = inject(PostsService);
  router = inject(Router);

  onSubmit() {

    this.PostService.create(this.formulario.value);
    this.router.navigateByUrl('/posts');
  }
}
