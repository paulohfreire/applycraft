import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, afterNextRender, computed, inject, signal } from '@angular/core';
import { SiteHeader } from '../../../shared/site-header/site-header';
import { BrandMark } from '../../../shared/brand-mark/brand-mark';
import { SkillCard } from '../skill-card/skill-card';
import { WorkflowDemo } from '../workflow-demo/workflow-demo';
import { installCommands, landingContent, Locale, repositoryUrl, Theme } from '../landing-content';

@Component({
  imports: [BrandMark, SiteHeader, SkillCard, WorkflowDemo],
  selector: 'app-landing-page',
  styleUrl: './landing-page.scss',
  templateUrl: './landing-page.html',
})
export class LandingPage {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly locale = signal<Locale>('en');
  protected readonly theme = signal<Theme>('dark');
  protected readonly copy = computed(() => landingContent[this.locale()]);
  protected readonly commands = installCommands;
  protected readonly repositoryUrl = repositoryUrl;
  protected readonly copiedCommand = signal<string | null>(null);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      afterNextRender(() => {
        const savedLocale = window.localStorage.getItem('applycraft-locale');
        const savedTheme = window.localStorage.getItem('applycraft-theme');
        this.setLocale(savedLocale === 'pt-BR' ? 'pt-BR' : 'en');
        this.setTheme(savedTheme === 'light' ? 'light' : 'dark');
      });
    }
  }

  protected setLocale(locale: Locale): void {
    this.locale.set(locale);
    this.document.documentElement.lang = locale;
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('applycraft-locale', locale);
    }
  }

  protected toggleTheme(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  protected async copyCommand(command: string): Promise<void> {
    if (!isPlatformBrowser(this.platformId) || !navigator.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(command);
    this.copiedCommand.set(command);
    window.setTimeout(() => {
      if (this.copiedCommand() === command) {
        this.copiedCommand.set(null);
      }
    }, 1800);
  }

  private setTheme(theme: Theme): void {
    this.theme.set(theme);
    this.document.documentElement.dataset['theme'] = theme;
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('applycraft-theme', theme);
    }
  }
}
