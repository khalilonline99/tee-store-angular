import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  editProduct(productForm: any, id: any) {
    console.log(productForm.value, id);
    return this.http.put<any>(`http://localhost:5000/edit-product/${id}`, productForm.value, this.httpOptions)
    .subscribe(res => {
      if (res.acknowledged) {
        alert('Product Updated Successfully!');
      }
    })
    

  }
}
