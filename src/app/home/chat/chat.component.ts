import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '@src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
constructor(private authSrv:AuthService){
  
}

logout(){
  this.authSrv.logout();
}
}
