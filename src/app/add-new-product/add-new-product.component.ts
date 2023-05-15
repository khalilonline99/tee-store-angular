import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AddNewProductService } from '../add-new-product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent {


 productForm = this.fb.group ({
   productTitle: ['', Validators.required],
   description: ['', Validators.required],
   properties: this.fb.group ({
     color: ['', Validators.required],
     size: ['', Validators.required],
     inStock: ['', Validators.required],
    }),
  });

  constructor (
    private fb: FormBuilder,
    private addNewProducrService: AddNewProductService
    ) { }
  
  onSubmit() {
    this.addNewProducrService.onSubmit(this.productForm);
    // console.log(this.productForm.value);
  }


}
