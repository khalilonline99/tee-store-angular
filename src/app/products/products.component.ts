import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  allProduct: any;

  constructor (
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.getData().subscribe ( res => {
      this.allProduct = res;
      // console.log(this.allProduct);
      
    })
  }

}
