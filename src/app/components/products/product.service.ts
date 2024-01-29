import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products'; // Base API URL

  constructor(private http: HttpClient) {}

  getProductsByCategory(category: string, limit: number = 4): Observable<Product[]> {
    const apiUrl = `${this.apiUrl}/category/${category}?limit=${limit}`;
    return this.http.get<Product[]>(apiUrl);
  }
}




// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Product } from './products.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductService {
//     private apiUrl = 'https://fakestoreapi.com/products'; // Base API URL
  
//     constructor(private http: HttpClient) {}
  
//     getProductsByCategory(category: string, limit: number = 4): Observable<Product[]> {
//       const apiUrl = `${this.apiUrl}/category/${category}?limit=${limit}`;
//       return this.http.get<Product[]>(apiUrl);
//     }
//   }
