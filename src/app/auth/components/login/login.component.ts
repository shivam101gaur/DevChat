import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '@src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  constructor(public auth: AuthService){}

  loginSuccess(e: any) { 
    console.log('logggin initiated');
    
    this.auth.login();
  }

  loginError(e: any) {

  }
}
