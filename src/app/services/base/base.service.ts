import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { timeoutWith } from 'rxjs/operators';
import { BASE_URL } from '../../app.constants';
import { ApiResponse } from '../../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl: string;
  private _actionUrl: string;
  private timeOut: number;

  constructor(public http: HttpClient) {
    this.baseUrl = BASE_URL;
    this.timeOut = 60000;
  }
  public get<T>() {
    return this.http.get<ApiResponse<T>>(`${this.baseUrl}${this.actionUrl}`)
      .pipe(timeoutWith(this.timeOut, this.handleTimeout()));
  }
  public emptyGet<T>() {
    return this.http.get<ApiResponse<T>>(``)
      .pipe(timeoutWith(this.timeOut, this.handleTimeout()));
  }

  public getById<T>(id: number): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(`${this.baseUrl}${this.actionUrl}/${id}`)
      .pipe(timeoutWith(this.timeOut, this.handleTimeout()));
  }

  public getByUser<T>(id: number, pageNumber = 0): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(`${this.baseUrl}${this.actionUrl}getbyuser/${id}?PageNumber=${pageNumber}`)
      .pipe(timeoutWith(this.timeOut, this.handleTimeout()));
  }

  public post<T>(input: any): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(`${this.baseUrl}${this.actionUrl}`, input)
      .pipe(timeoutWith(this.timeOut, this.handleTimeout()));
  }

  public update<T>(id: string, data: any, path = ""): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(`${this.baseUrl}${this.actionUrl}/${id}/${path}`, data)
      .pipe(timeoutWith(this.timeOut, this.handleTimeout()));
  }

  public updatePost<T = any>(input: any): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(`${this.baseUrl}${this._actionUrl}`, input)
      .pipe(timeoutWith(this.timeOut, this.handleTimeout()));
  }
  public updateData<T>(id: string, data: any, path = ""): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(`${this.baseUrl}${this.actionUrl}/${path}`, data)
      .pipe(timeoutWith(this.timeOut, this.handleTimeout()));
  }
  public updateDiary<T>(data: any): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(`${this.baseUrl}${this.actionUrl}}`, data)
      .pipe(timeoutWith(this.timeOut, this.handleTimeout()));

  }

  public delete<T = any>(): Observable<ApiResponse<T>> {
    return this.http.delete<ApiResponse<T>>(`${this.baseUrl}${this._actionUrl}`)
      .pipe(timeoutWith(this.timeOut, this.handleTimeout()));
  }
  public postRefreshToken<T>(userId, refreshToken): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(`${this.baseUrl}/auth/${userId}/token`, null, { headers: { refresh_token: refreshToken } })
      .pipe(timeoutWith(this.timeOut, this.handleTimeout()));
  }

  public setActionUrl(actionUrl: string, path = '') {
    this._actionUrl = `${actionUrl}${path}`;
    console.log("this._actionUrl", this._actionUrl);
  }
  public get actionUrl(): string {
    return this._actionUrl;
  }
  public set actionUrl(value: string) {
    this._actionUrl = value;
  }

  private handleTimeout<T>() {
    return new Observable<T>(obs => obs.error({ error: { message: 'Request timed out' } }));
  }
}
