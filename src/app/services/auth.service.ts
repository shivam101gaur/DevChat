import { Injectable } from '@angular/core';
import { AngularFireAuth, } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, Subject, lastValueFrom, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$!: typeof this.afAuth.user;

  // FIXME If not used in future, remove it
  private destroy$: Subject<boolean> = new Subject();

  constructor(private afAuth: AngularFireAuth, private router: Router) {  
    this.user$ = this.afAuth.user;
  }
  
  public async login(): Promise<void> {
    console.log(await this.User)
    if (await this.User) {
      this.router.navigate(['home'])
    }
  }
  
  public async logout(): Promise<void> {
    console.log(await this.User);
    return this.afAuth.signOut().then(r => {
      this.router.navigate(['auth']);
    });
  }

  public get User(): Promise<typeof this.user$ extends Observable<infer T> ? T : never>{
    return lastValueFrom(this.user$.pipe(take(1)));
  }
  private ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
