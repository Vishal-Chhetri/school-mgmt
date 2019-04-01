import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"studentdashboard",component:StudentdashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent =[LoginComponent,StudentdashboardComponent];
