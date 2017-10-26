import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpRequestsService {
  url: string = 'https://shop-18408.firebaseio.com/productData.json';

  constructor(private http: Http) { }

  postData(data) {
    return this.http.post(this.url, data);
  }

  getData(dataCategory) {
    return this.http.get(this.url)
    .map((response: Response) => {
      const data = response.json();
      console.log("Data received from server: ", data);
      /* return all products or from one of main categories listed in products service */
      if(dataCategory === "all") {
        return data;
      } else {
        return data[dataCategory];
      }      
    }).catch((error: Response) => {
      console.error("Error during downloading data from server:\n", error);
      return Observable.throw(error);
    });
  }

  updateData(data) {
    return this.http.post(this.url, data);
  }

}
