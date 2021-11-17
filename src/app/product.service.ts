import { Injectable } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {rxjs/add/operator/map};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl = "../assets/album.json";

  getAlbum(id: number) {
    return this._http.get(this._albumUrl);
    
    /* at the end of that get() call, 
    chain a function that maps over the response argument 
    and calls response.json()*/
  }

  constructor(private _http: HttpClient) { }
}