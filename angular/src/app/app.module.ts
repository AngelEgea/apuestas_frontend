import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';

// Application components and services
import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './shared/core.module';
import { LoginComponent } from './form-login/components/login/login.component';
import { FormLoginModule } from './form-login/form-login-module';
import { VerApuestasComponent } from './ver-apuestas/ver-apuestas.component';
import { VerPersonasComponent } from './ver-personas/ver-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    VerApuestasComponent,
    VerPersonasComponent
  ],
  imports: [
    BrowserModule,
    FormLoginModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
