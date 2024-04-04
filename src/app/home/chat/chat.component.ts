import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FirestoreService } from '@src/app/home/services/firestore.service';
import { AuthService } from '@src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
constructor(private authSrv:AuthService, private fs:FirestoreService){
  this.readRobots();
}

name: string = 'Dara1';
color: any = 'Color1';
age: any = 23;

robots!: any[];

async readRobots() {
    this.robots = await this.fs.getRobots();
}

create() {
  this.fs.createRobot(this.name, this.color, this.age);
}

logout(){
  this.authSrv.logout();
}
}
