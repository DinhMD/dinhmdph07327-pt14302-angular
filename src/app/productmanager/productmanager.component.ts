import { Component, OnInit } from '@angular/core';
import { products } from '../dataimp';
import { ProductServicesService } from '../services/product.service';

@Component({
  selector: 'app-productmanager',
  templateUrl: './productmanager.component.html',
  styleUrls: ['./productmanager.component.css']
})
export class ProductmanagerComponent implements OnInit {
  produc : products
  sanpham:products[];
  constructor(
    private proService: ProductServicesService
  ) {}

  ngOnInit() {
    this.sanpham = this.proService.getProduct();
  }
  
  removeitem(id){
      this.sanpham = this.proService.removeProduct(id);
  }
  showinfor(sp){
    this.produc = sp;
  }
  showbox(value){
    console.log(value);
  }
}