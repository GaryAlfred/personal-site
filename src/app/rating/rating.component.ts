import { Component, OnInit, Input } from '@angular/core';
import { Rating } from './rating.enum';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.svg',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  public value: Rating;

  public get isMaster(): boolean {
    return this.value === Rating.Master;
  }

  public get isExpert(): boolean {
    console.log(this.value);
    return this.value === Rating.Expert || this.value === Rating.Master;
  }

  constructor() { }

  ngOnInit(): void {
  }

}