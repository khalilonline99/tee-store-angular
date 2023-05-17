import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: any;
  productId: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient,

  ) { }

  getData() {
    return this.http.get('https://tee-store-backend.vercel.app/all-products');
  }

  getProductById(id: any) {
    const product = {}
    return this.http.get(`https://tee-store-backend.vercel.app/product/${id}`)
    // return of(product)
  }

  deleteProduct(id: number) {
    const url = `https://tee-store-backend.vercel.app/delete-product/${id}`;
    return this.http.delete<any>(url, this.httpOptions)
  }



}
