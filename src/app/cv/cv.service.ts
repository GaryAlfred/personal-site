import { Injectable } from '@angular/core';

import { Skill } from './skill.model';
import { Rating } from '../rating/rating.enum';
import * as cvFile from './cv.json';
import { CV } from './cv.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private cv: CV = new CV((cvFile as any).default);
  private tag: string;

  public validTags = [
    'engineer',
    'developer',
    'programmer',
    'architect',
    'front-end',
    'fullstack',
    'lead'
  ];

  /* Only one summary is ever returned */
  public get summary() {
    const summary = this.cv.summaries.find((s) => s.tags.includes(this.tag));
    return summary || this.cv.summaries[0];
  }

  public filterByTag = (tag: string) => {
    let t = tag.toLowerCase();
    if (this.validTags.includes(t)) {
      this.tag = t;
    }
  }

  constructor() { }
}
