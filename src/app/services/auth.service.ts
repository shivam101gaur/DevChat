import { Injectable } from '@angular/core';
import { AngularFireAuth, } from '@angular/fire/compat/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '@src/app/models/user.model';
import { addDoc, collection, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { Observable, Subject, lastValueFrom, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$!: typeof this.afAuth.user;

  // FIXME If not used in future, remove it
  private destroy$: Subject<boolean> = new Subject();

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private firestore: Firestore
  ) {
    this.user$ = this.afAuth.user;
    this.afAuth.user.pipe(
      switchMap(user => {
        if(user){
          return this.firestore
        }
      })
    )

  }

  public async login(): Promise<void> {
    const u = await this.User;
    // u.displayName
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

  public get User(): Promise<typeof this.user$ extends Observable<infer T> ? T : never> {
    return lastValueFrom(this.user$.pipe(take(1)));
  }
  private ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private async addUser() {
    const user: User = {
      displayName: '',
      email: '',
      photoURL: '',
      uid: ''

    }

    return await addDoc(collection(this.firestore,'users'), user)
  }
}
