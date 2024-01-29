import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../products/product.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  productId: any;
  productDetails: any; // Define a variable to store product details

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      // Fetch product details using this.productId
      // You can use a service to fetch details based on the product ID
      this.productService.getProductsByCategory(this.productId).subscribe(
        (data) => {
          this.productDetails = data;
        },
        (error) => {
          console.error('Error fetching product details:', error);
        }
      );
    });
  }


}
