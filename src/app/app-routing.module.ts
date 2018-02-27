import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from './top/top.component';
import { WearsComponent } from './wears/wears.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: TopComponent
  },
  {
    path: 'list/mens_outerwear',
    component: WearsComponent
  },
  {
    path: 'list/ladies_outerwear',
    component: WearsComponent
  },
  {
    path: 'list/mens_tshirts',
    component: WearsComponent
  },
  {
    path: 'list/ladies_tshirts',
    component: WearsComponent
  },
  {
    path: 'detail/:wear/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
