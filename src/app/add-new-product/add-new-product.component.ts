import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AddNewProductService } from '../add-new-product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent {


  productForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    image: [''],
    price: ['', Validators.required],
    properties: this.fb.group({
      color: ['', Validators.required],
      size: ['', Validators.required],
      inStock: ['', Validators.required],
    }),
  });

  constructor(
    private fb: FormBuilder,
    private addNewProducrService: AddNewProductService,
    private location: Location
  ) { }

  onSubmit() {
    this.addNewProducrService.onSubmit(this.productForm);
  }

  backButton(){
    this.location.back();
  }


}
