import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { LandingPage } from './features/landing/landing-page/landing-page';
import { routes } from './app.routes';

describe('application routes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
  });

  it('should lazy-load the landing page at the root route', async () => {
    const harness = await RouterTestingHarness.create();
    const router = TestBed.inject(Router);
    const page = await harness.navigateByUrl('/', LandingPage);

    expect(page).toBeInstanceOf(LandingPage);
    expect(router.url).toBe('/');
  });

  it('should redirect unknown routes to the landing page', async () => {
    const harness = await RouterTestingHarness.create();
    const router = TestBed.inject(Router);
    await harness.navigateByUrl('/not-found', LandingPage);

    expect(router.url).toBe('/');
  });
});
