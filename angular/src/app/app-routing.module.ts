import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormApuestasComponent } from './form-apuestas/form-apuestas.component';
import { FormPersonasComponent } from './form-personas/form-personas.component';

const appRoutes: Routes = [
  { path: 'FormLogin', component: FormLoginComponent},               // Redirect if url path is /access.
  { path: 'VerApuestas', component: FormApuestasComponent },
  { path: 'VerPersonas', component: FormPersonasComponent },
  { path: '**', redirectTo: '/FormLogin', pathMatch: 'full' }  // Redirect if url path do not match with any other route.
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }, // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
