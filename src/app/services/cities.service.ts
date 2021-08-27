import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Departments {
  id: number;
  departamento: string;
  ciudades: string[];
}

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private http: HttpClient) {}

  departmentsUrl: string =
    'https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json';

  getDepartments() {
    return this.http
      .get<Departments[]>(this.departmentsUrl)
      .pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend return code ${error.status}, body was:`,
        error.error
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
