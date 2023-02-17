import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "../model/course";
import {delay, first, take, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  // @ts-ignore
  constructor(private httpCliente: HttpClient) { }

  list(){
    return this.httpCliente.get<Course[]>(this.API)
      .pipe(
        first(),
        tap(courses => console.log(courses))
      );
  }
}
