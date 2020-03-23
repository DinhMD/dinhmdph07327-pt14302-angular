import { Injectable } from '@angular/core';
import { data } from '../expdata';
 
@Injectable()
export class ProductServicesService {
  items = data;
  constructor() { }

  getProduct(){
    return this.items;
  }

  addProduct(id, produc){
    let newpro = {id:id,...produc};
    this.items.push(newpro);
    console.log(this.items);
  }

  removeProduct(id){
   return this.items = this.items.filter(sp => sp.id != id);
  }
  getDetail(id){
    return this.items.find(product => product.id == id);
  }
}