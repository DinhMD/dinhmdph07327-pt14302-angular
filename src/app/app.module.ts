import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SlideComponent } from './slide/slide.component';
import { CategoryComponent } from './category/category.component';
import { ProductmanagerComponent } from './productmanager/productmanager.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductServicesService } from './services/product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, ProductComponent, ProductListComponent, SlideComponent, CategoryComponent, ProductmanagerComponent, ProductDetailsComponent, ProductAddComponent, HomeComponent, ManagerComponent, ManagerComponent, NotfoundComponent, ],
  bootstrap:    [ AppComponent ],
  providers: [ProductServicesService]
})
export class AppModule { }
