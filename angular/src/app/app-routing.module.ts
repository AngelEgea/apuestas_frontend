import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { VerApuestasComponent } from './ver-apuestas/ver-apuestas.component';
import { VerPersonasComponent } from './ver-personas/ver-personas.component';

const appRoutes: Routes = [
  { path: 'FormLogin', component: FormLoginComponent},               // Redirect if url path is /access.
  { path: 'VerApuestas', component: VerApuestasComponent },
  { path: 'VerPersonas', component: VerPersonasComponent },
  { path: '**', redirectTo: '/VerPersonas', pathMatch: 'full' }  // Redirect if url path do not match with any other route.
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
