import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ApiSchools {
  constructor(private http: HttpClient) {
  }



  getSchools(): Observable<any[]> {
    return this.http.get<any>('https://api.dane.gov.pl/1.4/resources/39884,liczba-uczniow-uczestniczacych-w-zajeciach-rozwijajacych-zainteresowania-i-uzdolnienia-wedug-rodzajow-tych-zajec-i-wedug-gmin-dane-sio-w-roku-szkolnym-20202021/data?page=112')
      .pipe(
        map(response =>
          response.data.filter((item: any) =>
            item.attributes.col3.val === 'szamotulski'
          )
        )
      );
  }
}