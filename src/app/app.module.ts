import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ProductsComponent } from './products/products.component';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { EditProductComponent } from './edit-product/edit-product.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    HomeComponent,
    ProductDetailsComponent,
    AddNewProductComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatDialogModule,
    ReactiveFormsModule, FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
