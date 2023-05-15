import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // allProduct: any;

  // constructor (
  //   private productService: ProductService
  // ) {}

  // ngOnInit() {
  //   this.productService.getData().subscribe ( res => {
  //     this.allProduct = res;
  //     console.log(this.allProduct);
      
  //   })
  // }

}
