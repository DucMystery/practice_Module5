import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from './books/detail/detail.component';
import {CreateComponent} from './books/create/create.component';
import {EditComponent} from './books/edit/edit.component';
import {DeleteComponent} from './books/delete/delete.component';
import {ListComponent} from './books/list/list.component';

const routes: Routes = [
  {
    path: 'book-detail/:id',
    component: DetailComponent
  },
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'create-book',
    component: CreateComponent
  },
  {
    path: 'edit-book/:id',
    component: EditComponent
  },
  {
    path: 'delete-book/:id',
    component: DeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
