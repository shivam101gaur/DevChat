import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@src/app/services/auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const authSrv = inject(AuthService);
  const router = inject(Router);
  if(await authSrv.User){
    router.navigate(['home'])
    return false;
  }
  return true;

};
