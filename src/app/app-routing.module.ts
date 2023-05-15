import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppModule } from './app.module';
import { HomeComponent } from './home/home.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details/:id', component: ProductDetailsComponent},
  {path: 'add-new-product', component: AddNewProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
