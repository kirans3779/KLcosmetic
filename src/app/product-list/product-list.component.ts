import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  ProductList:any;
  
constructor( private _product:ProductService){
  
}
ngOnInit(): void {
  this._product.getProduct().subscribe((result)=>{
    console.log(result);
    this.ProductList=result;
    
  })

}

sort(key:string){
  this._product.getProduct().subscribe((result)=>{
    console.log(result);
    this.ProductList=result;
    // this.ProductList.category.value
    this.ProductList.sort((a:any, b:any) => {
      if (a[key] < b[key]) {
        return -1;
      } else if (a[key] > b[key]) {
        return 1;
      } else {
        return 0;
      }
    });
  })
  
}

}
