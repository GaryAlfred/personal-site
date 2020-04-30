import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';
import { Rating } from '../rating/rating.enum';
import * as cvFile from './cv.json';
import { CV } from './cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  public cv: CV = new CV((cvFile as any).default);

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

  constructor() { }

  ngOnInit(): void {
    console.log('cv...');
    console.log(this.cv);
  }

}
