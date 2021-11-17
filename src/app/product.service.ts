import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Album } from './album';
import { Observable } from 'rxjs/Observable';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ProductService {
  
  private _albumUrl = "../assets/album.json";

  getAlbum(id: number) : Observable<Album> {
    return this._http.get(this._albumUrl).map((response):Album => response.json());
  }

  constructor(private _http: Http) { }
}