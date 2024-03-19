import { Routes } from '@angular/router';
import { ListaPostComponent } from './pages/lista-post/lista-post.component';
import { NuevaComponent } from './pages/nueva/nueva.component';


export const routes: Routes = [
    { path: 'posts', component: ListaPostComponent },
    { path: 'posts/nueva', component: NuevaComponent },

];
