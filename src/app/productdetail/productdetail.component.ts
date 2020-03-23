import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { products } from '../dataimp';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor(
    private service : ProductServicesService,
    private activate : ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  product:products
  getProduct(){
    this.activate.params.subscribe(param =>
      this.product = this.service.getDetail(param.id)
    );
  }

}