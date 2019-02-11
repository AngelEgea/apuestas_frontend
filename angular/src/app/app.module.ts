import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';

// Application components and services
import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './shared/core.module';
import { FormLoginModule } from './form-login/form-login-module';
import { FormApuestasComponent } from './form-apuestas/form-apuestas.component';
import { FormPersonasComponent } from './form-personas/form-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormApuestasComponent,
    FormPersonasComponent
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
