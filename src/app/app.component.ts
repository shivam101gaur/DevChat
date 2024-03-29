import { Component } from '@angular/core';
import { AuthService } from '@src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DevChat';

  loginSuccess(e: any) { 

  }

  loginError(e: any) {

  }
}
