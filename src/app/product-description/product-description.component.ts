import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  /*declare albumInfo as a class property in the ProductDescription class, 
  which you can do by simply writing albumInfo; 
  on the first line after the class definition*/

  constructor(private _productService: any) { }

  ngOnInit() {
    /* call this._productService.getAlbum(1) 
    and chain a call to the subscribe(response => this.albumInfo - response) method 
    */
  }

}
