import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DetalheAlunoComponent } from './views/detalhe-aluno/detalhe-aluno/detalhe-aluno.component';
//import { AuthGuardService } from './resources/services/auth-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'by-id/:id', component: DetalheAlunoComponent},
  {
    path: 'dashboard',
   // canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
