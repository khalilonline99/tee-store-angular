import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductInterface } from '../product';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent {
  product: any;

  constructor(
    // injected and saved in private fields
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    public modal: MatDialog,
  ) { }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(items => {
      this.product = items;
    }
    )
  }

  ngOnInit(): void {
    this.getProduct();
  }

  goBack(): void {
    this.location.back();
  }

  openModal(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.modal.open(ModalGeneral, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}



@Component({
  selector: 'modal-general',
  templateUrl: 'modal-general.html',
})

export class ModalGeneral {
  constructor(public modalRef: MatDialogRef<ModalGeneral>) {}
  
  closeModal() {
    this.modalRef.close();
  }
}