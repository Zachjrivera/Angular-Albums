import { Component, OnInit } from '@angular/core';
import { IProducts } from '../products';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products: IProducts[];
  upproducts: IProducts[] = [];
  selectedProduct : Subject<any> = new Subject;
  total:number = 0;
  delit:number = 0;

  constructor() { 
    this.products = [
      {
        product_id : "1",
        product_img : "https://media.giphy.com/media/dIsV9MUSJWPRu/giphy.gif",
        product_name : "Acid Rap",
        product_price : 13.99,
        product_details : "Chance the rappers Acid Rap Album",
        product_quantity : 0
      },
      {
        product_id : "2",
        product_img : "https://media.giphy.com/media/9O2AJgXFqIcko/giphy.gif",
        product_name : "Beacuse The Internet",
        product_price : 12.49,
        product_details : "Childish Gambinos Because The Internet Album",
        product_quantity : 0
      },
      {
        product_id : "3",
        product_img : "https://media.giphy.com/media/5yLgocnSlDKgWymJ5fi/giphy.gif",
        product_name : "Gorillaz Album",
        product_price : 22.56,
        product_details : "Gorillaz Album named Gorillaz",
        product_quantity : 0
      },
      {
        product_id : "4",
        product_img : "https://media.giphy.com/media/l3mZ2Is34s0O9BOBq/giphy.gif",
        product_name : "Night Visions",
        product_price : 99.99,
        product_details : "Imagine Dwagons Hit Album Night Visions",
        product_quantity : 0
      }
    ];
   }

  ngOnInit() {
    this.totalPrice();
  }

  getpopup(det) {
    this.selectedProduct.next(det);
  }

  


  totalPrice(){
    this.total = 0;
    for(var i=0;i<this.products.length;i++){
      this.total += (this.products[i].product_price * this.products[i].product_quantity);
    }
  }

  add(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products[i].product_quantity += 1;
      }           
    }
    this.totalPrice();
    console.log(this.products);
  }

  del(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products[i].product_quantity-= 1;
      }           
    }
    this.totalPrice();
    console.log(this.products);
  }

  delpopup(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products.splice(i,1);
      }           
    }
    this.totalPrice();
    console.log(this.products);
  }

}