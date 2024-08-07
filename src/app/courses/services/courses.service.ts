import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient,
  ) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),
        delay(200),
      );
  }

  save(course: Partial<Course>) { /* Partial indica que posso, la no arquivo ts, receber um course sem o ID, recebe somente o name e category */
    return this.httpClient.post<Course>(this.API, course);
  }
}
