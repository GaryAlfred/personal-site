import { TaggedAndDescribed } from 'src/types';

export class Job implements TaggedAndDescribed {
    tags: string[];
    title: string;
    organizationName: string;
    location?: string;
    description?: string;
    accomplishments: string[];
    startDate?: string;
    endDate?: string;
}
