import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PostComponent } from './component/post/post.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'post', component: PostComponent },
];
