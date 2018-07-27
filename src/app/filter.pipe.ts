import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'jobType'})
export class FabricTypePipe implements PipeTransform {
  transform(jobs: any[], jobTypes: string[]): any[] {
    if (!jobTypes || jobTypes.length === 0) {
        return jobs;
    }
    return jobs.filter(job => jobTypes.includes(job.type));
  }
}
