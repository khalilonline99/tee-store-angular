import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddNewProductService {

  constructor() { }

  onSubmit(productForm: any) {
    // TODO: Use EventEmitter with form value
    console.log(productForm.value);
  }
}
