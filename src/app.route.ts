import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';
import {HomeComponent} from 'app/home/home.component';
import {AddComponent} from 'app/add/add.component';
import {DetailComponent} from 'app/detail/detail.component';
import {EditComponent} from 'app/edit/edit.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'edit', component: EditComponent}
];

export const Router: ModuleWithProviders = RouterModule.forRoot(routes);
