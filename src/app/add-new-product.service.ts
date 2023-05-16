import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddNewProductService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
   })
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  status: any;

  onSubmit(productForm: any) {
    // TODO: Use EventEmitter with form value
    console.log(productForm.value);
    return this.http.post<any>('http://localhost:5000/add-product', JSON.stringify(productForm.value), this.httpOptions)
      .subscribe(data => {
        if (data.acknowledged) {
          this.router.navigate(['/']);
          alert('Product Added Successfully!')
        }
      })
    // this.addNewProduct(productForm)
  }



}
