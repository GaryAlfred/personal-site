import { Component, OnInit } from '@angular/core';
import { CV } from './models/cv.model';
import { CvService } from './cv.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  public cv: CV;
  public validTags = [
    'engineer',
    'frontend',
    'fullstack'
  ];
  public selectedTags: string[] = [];
  public validResumes = {
    jamstack: { tags: [] },
    frontend: { tags: ['frontend'] }
  };
  public showRatings = false;

  public shouldHighlight(tags: string[]) {
    if (this.selectedTags) {
      return this.tagsIntersect(this.selectedTags, tags);
    }
    // If there are no selected tags, highlight everything.
    return true;
  }

  public selectedTagsChanged() {
    console.log('selectedTagsChanged');
    const autoHighlight = !(this.selectedTags && this.selectedTags.length);
    for (const skill of this.cv.skills) {
      skill.highlight = autoHighlight ||
        (skill.tags && this.tagsIntersect(skill.tags, this.selectedTags));
    }
  }

  public toggleTagSelection(tag: string) {
    const idx = this.selectedTags.indexOf(tag);
    if (idx >= 0) {
      this.selectedTags.splice(idx, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.selectedTagsChanged();
  }

  constructor(cvService: CvService, route: ActivatedRoute) {
    this.cv = cvService.cv;
    route.queryParams.subscribe(qp => this.processQueryParams(qp)); // you can also do this in ngOnInit
  }

  ngOnInit(): void {
  }

  private tagsIntersect(arr1: string[], arr2: string[]) {
    for (const tag of arr1) {
      if (arr2.indexOf(tag) >= 0) {
        return true;
      }
    }
    return false;
  }

  private processQueryParams = (params: Params) => {
    this.selectedTags = [];
    if (params.resume) {
      const resume = this.validResumes[params.resume];
      if (resume) {
        this.selectedTags = resume.tags;
      }
    }
    if (params.tags && params.tags.length) {
      const tags = params.tags.split(',');
      for (const tag of tags) {
        if (this.validTags.indexOf(tag) >= 0) {
          this.selectedTags.push(tag);
        }
      }
    }
    this.selectedTagsChanged();
  }


}
