import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { Wear } from './wear';

@Injectable()
export class WearService {

  private headers = new Headers({'Content-Type': 'application/json'});
  
  private url = '/api/';

  constructor(private http: Http) { }

  getWears(id: string): Promise<Wear[]> {
    return this.http.get(`${this.url}${id}`)
             .toPromise()
             .then(response => response.json().data as Wear[])
             .catch(this.handleError);
  }

  getWear(wear: string, id: string): Promise<Wear> {
    const url = `${this.url}${wear}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Wear)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
