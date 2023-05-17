import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
   })
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private location: Location
  ) { }

  editProduct(productForm: any, id: any) {
    console.log(productForm.value, id);
    return this.http.put<any>(`https://tee-store-backend.vercel.app/edit-product/${id}`, productForm.value, this.httpOptions)
    .subscribe(res => {
      if (res.acknowledged) {
        alert('Product Updated Successfully!');
        this.location.back();
      }
    })
    

  }
}
