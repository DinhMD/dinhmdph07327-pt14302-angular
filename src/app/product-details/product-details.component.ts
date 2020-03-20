import { Component, OnInit, Input } from '@angular/core';
import { products } from '../dataimp';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 
  constructor() { }
 @Input('data') produc : products;
  ngOnInit() {
  }

}