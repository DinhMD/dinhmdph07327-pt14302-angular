import { Component, OnInit } from "@angular/core";
import { data } from "../expdata";
import { products } from "../dataimp";
import { ProductServicesService } from '../services/product.service';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor(
    private proService: ProductServicesService
  ) {}
  ngOnInit() {
    this.product = this.proService.getProduct();
  }
   product: products[];
  produc:products;
  showinfor(sp) {
    this.produc = sp;
  }
}
