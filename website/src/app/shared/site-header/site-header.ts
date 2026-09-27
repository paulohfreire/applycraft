import { Component, input, output } from '@angular/core';
import { LandingCopy, Locale, Theme } from '../../features/landing/landing-content';
import { BrandMark } from '../brand-mark/brand-mark';

@Component({
  imports: [BrandMark],
  selector: 'app-site-header',
  styleUrl: './site-header.scss',
  templateUrl: './site-header.html',
})
export class SiteHeader {
  readonly copy = input.required<LandingCopy>();
  readonly locale = input.required<Locale>();
  readonly theme = input.required<Theme>();
  readonly repositoryUrl = input.required<string>();
  readonly localeChanged = output<Locale>();
  readonly themeChanged = output<void>();
}
