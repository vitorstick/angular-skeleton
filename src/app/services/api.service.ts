import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiInterface } from '../models/api.interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _baseUrl = 'https://api.pagerduty.com';
  constructor(private httpClient: HttpClient) {}

  getAbilities(): Observable<string[]> {
    return this.httpClient
      .get<{ abilities: string[] }>(`${this._baseUrl}/abilities`)
      .pipe(
        map((abilities) => {
          console.log(abilities);
          return abilities.abilities;
        })
      );
  }

  getData(): Observable<ApiInterface[]> {
    return this.httpClient.get<ApiInterface[]>(`${this._baseUrl}/abilities`);
  }

  getDataWithParams(params?: HttpParams): Observable<ApiInterface[]> {
    return this.httpClient.get<ApiInterface[]>(this._baseUrl, { params });
  }

  getDataDetail(id: string): Observable<ApiInterface> {
    return this.httpClient.get<ApiInterface>(`${this._baseUrl}/${id}`);
  }

  changeData(data: ApiInterface): Observable<ApiInterface> {
    return this.httpClient.put<ApiInterface>(this._baseUrl, data);
  }
}
