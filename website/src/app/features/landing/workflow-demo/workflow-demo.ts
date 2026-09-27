import { Component, computed, input, signal } from '@angular/core';
import { LandingCopy } from '../landing-content';

@Component({
  imports: [],
  selector: 'app-workflow-demo',
  styleUrl: './workflow-demo.scss',
  templateUrl: './workflow-demo.html',
})
export class WorkflowDemo {
  readonly workflow = input.required<LandingCopy['workflow']>();
  protected readonly activeIndex = signal(0);
  protected readonly activeStep = computed(() => this.workflow().steps[this.activeIndex()]);

  protected selectStep(index: number): void {
    this.activeIndex.set(index);
  }
}
