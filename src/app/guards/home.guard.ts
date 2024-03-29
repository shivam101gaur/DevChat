import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@src/app/services/auth.service';
export const homeGuard: CanActivateFn = async (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (await auth.User) {
    return true;
  }
  else {
    router.navigate(['auth'])
    return false;
  }
};
