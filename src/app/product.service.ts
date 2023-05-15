import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost:5000/all-products');
  }

  getProductById(id: any) {
    const product = {}
    return this.http.get(`http://localhost:5000/product/${id}`)
    // return of(product)
  }
}
