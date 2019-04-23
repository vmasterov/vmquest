import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CoverService {

    private coversUrl = 'api/covers';
    private testUrl = 'api/test'; // It`s for test. It will be deleted soon

    constructor(
        private http: HttpClient
    ) {
    }

    getCover(coverType: string): Observable<object>{
        const url = this.coversUrl + '/' + coverType;
        return this.http.get<object>(url).pipe(
            catchError(this.handleError<object>('getCovers', {}))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            // console.error(error, `${operation} failed: ${error.message}`); // log to console instead
            console.error(error, `${operation} failed: ${error.body.error}`); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
