import { Skill } from './skill.model';
import { TaggedAndDescribed } from 'src/types';
import { Job } from './job.model';

export class CV implements CvJson {

    public forename: string;
    public surname: string;
    public phone: string;
    public email: string;
    public address: string;
    public url: string;
    public skills: Skill[] = [];
    public summaries: Array<TaggedAndDescribed> = [];
    public jobs: Job[] = [];
    volunteering?: Job[] = [];
    education?: string[] = [];

    public get name(): string {
        return `${this.forename} ${this.surname}`;
    }

    constructor(data?: CvJson) {
        console.log('data parameter...');
        console.log(data);
        if (data) {
            Object.assign(this, data);
        }
     }
}

interface CvJson {
    forename: string;
    surname: string;
    phone: string;
    email: string;
    address: string;
    url: string;
    summaries: Array<TaggedAndDescribed>;
    skills: Skill[];
    jobs: Job[];
    volunteering?: Job[];
    education?: string[];
}

