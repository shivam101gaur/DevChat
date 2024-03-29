import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseUIModule } from 'firebaseui-angular';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { firebaseUiAuthConfig } from '@src/app/auth/config/firebase-auth-ui.config';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
