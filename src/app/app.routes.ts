import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

// Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { CuacaComponent } from './cuaca/cuaca.component';

export const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'manifest.webmanifest', redirectTo: '/', pathMatch: 'full' },

  { path: 'admin', component: AdminComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard2', component: Dashboard2Component },
  { path: 'dashboard3', component: Dashboard3Component },
  { path: 'mahasiswa', component: MahasiswaComponent},
  { path: 'cuaca', component:CuacaComponent},
];
@NgModule({

  declarations: [

  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule {}
