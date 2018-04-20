import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeacherService {
  private _url: string = "http://localhost:62054/api/Teacher";
  constructor(private _http:HttpClient) {

  }

  getTeachers() {
    return this._http.get(this._url)
      .map((response: Response) => response)
  }

}
