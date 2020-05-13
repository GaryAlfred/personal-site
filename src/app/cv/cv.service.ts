import { Injectable } from '@angular/core';

import { Rating } from '../rating/rating.enum';

// Type and file for compiling JSON file as object.
import { CV, Contact } from './models/cv.model';
import { Skill } from './models/skill.model';
import * as cvFile from './data/garyalfred.cv.json';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  // Compile json file as object.
  public cv: CV = new CV((cvFile as any).default);


  public validTags: string[];

  public get highlightSelected() {
    return this.selectedTags.length > 0;
  }

  public selectedTags: string[] = [];

  public get masterSkills(): Skill[] {
    return this.cv.skills.filter(s => {
      console.log(`${s.name}.isMaster: ${s.rating === Rating.Master}`);
      return s.rating === Rating.Master;
    });
  }

  public get expertSkills(): Skill[] {
    return this.cv.skills.filter(s => {
      console.log(`${s.name}.isExpert: ${s.rating === Rating.Expert}`);
      return s.rating === Rating.Expert;
    });
  }

  public get goodSkills(): Skill[] {
    return this.cv.skills.filter(s => {
      console.log(`${s.name}.isGood: ${s.rating === Rating.Good}`);
      return s.rating === Rating.Good;
    });
  }


  /* Only one summary is ever returned */
  public get summary() {
    const summary = this.cv.summaries.find(
      (s) => this.intersects(s.tags, this.selectedTags));
    return summary || this.cv.summaries[0];
  }

  constructor() {}

  private intersects = (arr1: string[], arr2: string[]) => {
    const x = arr1.concat(arr2);
    for (const tag1 in arr1) {
      if (arr2.includes(tag1)) {
        return true;
      }
    }
    return false;
  }

}
