import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {
  LoginFormComponent,
  ResetPasswordFormComponent,
  CreateAccountFormComponent,
  ChangePasswordFormComponent,
} from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import {
  DxDataGridModule,
  DxFormModule,
  DxButtonModule,
  DxValidatorModule,
  DxSelectBoxModule,
  DxListModule,
  DxCheckBoxModule,
} from 'devextreme-angular';
import { CreateBusinessComponent } from './pages/create-business/create-business.component';
import { CreateCompanyComponent } from './pages/create-company/create-company.component';
import { ListBusinessComponent } from './pages/list-business/list-business.component';
import { ShowCompaniesComponent } from './pages/show-companies/show-companies.component';

const routes: Routes = [
  {
    path: 'show-company',
    component: ShowCompaniesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'list-business',
    component: ListBusinessComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'create-company',
    component: CreateCompanyComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'create-business',
    component: CreateBusinessComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule,
    ReactiveFormsModule,
    DxDataGridModule,
    DxFormModule,
    DxButtonModule,
    DxValidatorModule,
    DxSelectBoxModule,
    DxListModule,
    DxCheckBoxModule,
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    CreateCompanyComponent,
    CreateBusinessComponent,
    ListBusinessComponent,
    ShowCompaniesComponent,
  ],
})
export class AppRoutingModule {}
