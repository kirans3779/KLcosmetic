import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  SearchResult:any;
  constructor(private _productService: ProductService,
    private route:Router) {}
  searchproduct(prod: KeyboardEvent) {
    if (prod) {
      const element = prod.target as HTMLInputElement;
      this._productService.searchProduct(element.value).subscribe((res:any) => {
     console.log(res.length);
     if(res.length>5){
      res.length=5;
     }
        
        this.SearchResult=res;
      });
    }
  }
  hideResult(){
    this.SearchResult=undefined;
  }
  submitSearch(val:string){
console.log("searchval"+val);
this.route.navigate([`search/${val}`]);
  }
}
