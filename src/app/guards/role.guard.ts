import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { filter, map } from 'rxjs';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const expectedRole: 'recruiter' | 'candidate' = route.data?.['expectedRole'] || 'candidate';

  return authService.isRecruiter$.pipe(
    filter((isRecruiter) => isRecruiter !== null),
    map((isRecruiter) => {
      const hasAccess = (expectedRole === 'recruiter' && isRecruiter) || (expectedRole === 'candidate' && !isRecruiter);
      return hasAccess ? true : router.createUrlTree(['/welcome']);
    })
  );
};
