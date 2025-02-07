import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { filter, map } from 'rxjs';

export const recruiterGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isRecruiter$.pipe(
    filter((isRecruiter) => isRecruiter !== null),
    map((isRecruiter) => {
      return isRecruiter ? true : router.createUrlTree(['/welcome']);
    })
  );
};
