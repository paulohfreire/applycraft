import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-brand-mark',
  styleUrl: './brand-mark.scss',
  templateUrl: './brand-mark.html',
})
export class BrandMark {
  readonly showName = input(true);
}
