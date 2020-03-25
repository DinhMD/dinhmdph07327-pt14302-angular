import { Injectable } from "@angular/core";
import { products } from "../dataimp";
import { data } from "../expdata";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ProductServicesService {
  items: products[];
  api = "https://5e7b1a7f0e04630016332aa5.mockapi.io";
  constructor(private http: HttpClient) {}

  getProducts(): Observable<products[]> {
    return this.http.get<products[]>(`${this.api}/product`);
  }

  addProduct(id, produc): Observable<products> {
    let newpro = { id: id, ...produc };
    console.log(newpro);
    return this.http.post<products>(`${this.api}/product`, newpro);
    
  }

  removeProduct(id) {
    return (this.items = this.items.filter(sp => sp.id != id));
  }
  getDetail(id) {
    return this.items.find(product => product.id == id);
  }
}
