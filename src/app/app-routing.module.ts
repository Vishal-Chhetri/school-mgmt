import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { ParentComponent } from './parent/parent.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "studentdashboard", component: StudentdashboardComponent },
  { path: "parentdashboard", component: ParentComponent },
  { path: "teacherdashboard", component: TeacherComponent },
  { path: "admindashboard", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [LoginComponent, StudentdashboardComponent, ParentComponent, TeacherComponent,AdminComponent];
