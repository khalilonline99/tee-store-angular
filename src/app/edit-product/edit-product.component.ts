import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { EditProductService } from '../edit-product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {


  product: any;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(res => {
      this.product = res;
      this.productForm.controls['title'].setValue(this.product.title);
      this.productForm.controls['description'].setValue(this.product.description);
      this.productForm.controls['image'].setValue(this.product.image);
      this.productForm.controls['price'].setValue(this.product.price);
      this.productForm.controls['properties'].controls['color'].setValue(this.product.properties.color)
      this.productForm.controls['properties'].controls['size'].setValue(this.product.properties.size)
      this.productForm.controls['properties'].controls['inStock'].setValue(this.product.properties.inStock)
      console.log(this.product);
    })
  }

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private editProductService: EditProductService,
    private location: Location
  ) {

  }


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

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.editProductService.editProduct(this.productForm, id)
  }

  backButton(){
    this.location.back();
  }

}
