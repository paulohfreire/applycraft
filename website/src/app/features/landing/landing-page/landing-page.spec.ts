import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPage } from './landing-page';

describe('LandingPage', () => {
  let component: LandingPage;
  let fixture: ComponentFixture<LandingPage>;

  beforeEach(async () => {
    window.localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [LandingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the English value proposition by default', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent).toContain('Your job search deserves');
    expect(element.querySelectorAll('app-skill-card')).toHaveLength(5);
  });

  it('should switch the complete page copy to Portuguese', async () => {
    const element = fixture.nativeElement as HTMLElement;
    const portugueseButton = [
      ...element.querySelectorAll<HTMLButtonElement>('.language button'),
    ].find((button) => button.textContent?.trim() === 'PT');

    portugueseButton?.click();
    await fixture.whenStable();

    expect(element.querySelector('h1')?.textContent).toContain('Sua busca por emprego merece');
    expect(document.documentElement.lang).toBe('pt-BR');
  });
});
