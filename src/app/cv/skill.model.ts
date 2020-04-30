import { Rating } from '../rating/rating.enum';

export interface Skill {
  name: string;
  rating: Rating;
  tags?: string[];
}
