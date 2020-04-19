import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }

  public getProducts(filename: string): Observable<any> {
    console.log("ApiServiceService:",filename);
    return this.httpClient.get("assets/mock/" + filename + ".json");
  }
}
