import { Component, OnInit, Output } from "@angular/core";
import { products } from "../dataimp";
import { ProductServicesService } from "../services/product.service";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"]
})
export class ProductAddComponent implements OnInit {
  constructor(private proService: ProductServicesService) {}
  fullitem: products[];
  ngOnInit() {
    this.proService.getProducts().subscribe(response => this.fullitem = response, error => console.log(error));
  }
  produc: products = new products();
  message;
  additem(name, price) {
    if (!(name == "" || price == "")) {
      this.proService.getProducts().subscribe(response => this.fullitem = response, error => console.log(error));
      let newid = 1;
      if (this.fullitem.length > 0) {
        console.log(this.fullitem[this.fullitem.length - 1].id);
        newid = this.fullitem[this.fullitem.length - 1].id + 1;
        console.log(newid);
      }
      if (this.produc.anh == "") {
        this.produc.anh =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS02Ut_mK_YQvmUW690CqTWCjlYS5o12uHyRVOovzG5dGYlpZZ0";
      }
      (document.querySelector(".message") as HTMLElement).style.color = "green";
      this.message = "Insert successful!";
      this.proService.addProduct(newid, this.produc);
    } else {
      if (name == "") {
        (document.querySelector(".namecontrol") as HTMLElement).style =
          "border-color: red";
      }
      if (price == "") {
        (document.querySelector(".pricecontrol") as HTMLElement).style =
          "border-color: red";
      }
      (document.querySelector(".message") as HTMLElement).style.color = "red";
      this.message = "Name and price must not be blank !";
      return;
    }
  }

  setbordercolor() {
    this.message = "";
    
  }

  setnullmessage() {
    (document.querySelector(".namecontrol") as HTMLElement).style =
      "border: 1px solid lightgray;";
    (document.querySelector(".pricecontrol") as HTMLElement).style =
      "border: 1px solid lightgray;";
    this.message = "";
  }
}
