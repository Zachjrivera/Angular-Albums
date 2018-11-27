import { Component, OnInit, Input } from '@angular/core';
import {Album} from '../album';
import { Subject } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  @Input() list : Subject<any>;
  fulldetails : any[];

  constructor() { }

  ngOnInit() {

    this.list.subscribe(
      detail => {
        console.log(detail);
        this.fulldetails = detail;    
      })
    }

}