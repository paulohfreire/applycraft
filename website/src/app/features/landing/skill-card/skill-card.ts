import { Component, input } from '@angular/core';
import { SkillContent } from '../landing-content';

@Component({
  imports: [],
  selector: 'app-skill-card',
  styleUrl: './skill-card.scss',
  templateUrl: './skill-card.html',
})
export class SkillCard {
  readonly skill = input.required<SkillContent>();
  readonly linkLabel = input.required<string>();
}
