import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';


const routes: Routes = [
  {
    path: 'cv',
    component: CvComponent
  },
  {
    path: '**',
    redirectTo: 'cv'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
