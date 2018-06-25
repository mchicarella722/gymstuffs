import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private http:Http) { }

  userSearch(query){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:4201/users/userSearch", query, {headers:headers})
      .map(res => res.json()); 
  }

}
