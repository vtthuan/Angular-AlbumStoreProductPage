import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _albumUrl = "../assets/album.json";

  constructor(private http : HttpClient) { }

  getAlbum(id : number) {

    return this.http.get(this._albumUrl);
  }
}
