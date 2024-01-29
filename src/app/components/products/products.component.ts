import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './products.model';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductComponent implements OnInit {
  jewelleryProducts: Product[] = [];
  mensClothingProducts: Product[] = [];
  electronicsProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Fetch products for each category when the component initializes
    this.productService.getProductsByCategory('jewelery').subscribe((data) => {
      this.jewelleryProducts = data;
    });

    this.productService.getProductsByCategory('men\'s clothing').subscribe((data) => {
      this.mensClothingProducts = data;
    });

    this.productService.getProductsByCategory('electronics').subscribe((data) => {
      this.electronicsProducts = data;
    });
  }
}








// import { Component, OnInit } from '@angular/core';
// import { ProductService} from './product.service';
// import { Product } from './products.model';
// import { Router, NavigationEnd } from '@angular/router';

// @Component({
//   selector: 'app-product',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css'],
// })
// export class ProductComponent implements OnInit {
//   jewelleryProducts: Product[] = [];
//   mensClothingProducts: Product[] = [];
//   electronicsProducts: Product[] = [];

//   constructor(private router: Router) {
//     this.router.events.subscribe((event) => {
//       if (event instanceof NavigationEnd) {
//         // Check if the current route is "/products"
//         this.isProductsPage = this.router.url === '/products';
//       }
//     });
//   }

//   ngOnInit(): void {
//     // Fetch products for each category when the component initializes
//     this.ProductService.getProductsByCategory('jewelery').subscribe((data) => {
//       this.jewelleryProducts = data;
//     });

//     this.ProductService.getProductsByCategory('men\'s clothing').subscribe((data) => {
//       this.mensClothingProducts = data;
//     });

//     this.ProductService.getProductsByCategory('electronics').subscribe((data) => {
//       this.electronicsProducts = data;
//     });
//   }
// }
