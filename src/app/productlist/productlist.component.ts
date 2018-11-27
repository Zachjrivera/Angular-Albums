import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import {ALBUMS} from '../mock-albums';
import { AlbumService} from '../album.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {


  albums = ALBUMS;

  selectedProduct : Subject<any> = new Subject;
  total:number = 0;
  delit:number = 0;

  constructor(private albumService: AlbumService) { 
  }

  ngOnInit() {
    this.totalPrice();
  }

  getpopup(det) {
    this.selectedProduct.next(det);
  }

  getAlbums(): void {
    this.albumService.getAlbums().subscribe(albums => this.albums = albums)
  }


  totalPrice(){
    this.total = 0;
    for(var i=0;i<this.albums.length;i++){
      this.total += (this.albums[i].product_price * this.albums[i].product_quantity);
    }
  }

  add(pid){
    console.log(pid);
    for(var i=0;i<this.albums.length;i++){
      if(this.albums[i].product_id === pid)
      {  
        this.albums[i].product_quantity += 1;
      }           
    }
    this.totalPrice();
    console.log(this.albums);
  }

  del(pid){
    console.log(pid);
    for(var i=0;i<this.albums.length;i++){
      if(this.albums[i].product_id === pid)
      {  
        this.albums[i].product_quantity-= 1;
      }
      if(this.albums[i].product_quantity <0){
        this.albums[i].product_quantity = 0;
      }           
    }
    this.totalPrice();
    console.log(this.albums);
  }

  

}