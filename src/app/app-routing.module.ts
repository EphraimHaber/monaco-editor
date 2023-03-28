import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonacoAngularComponent } from './monaco-angular/monaco-angular.component';

const routes: Routes = [
  { path: 'monaco', component: MonacoAngularComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
