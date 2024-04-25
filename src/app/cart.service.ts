import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient, private router: Router) {}

  private url = `${environment.apiUrl}/cart`;

  getCart() {
    const jwtToken = localStorage.getItem('token');
    if (!jwtToken) {
      this.router.navigate(['/login']);
      // throw new Error('invalid Token');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return this.http.get(this.url, { headers: headers });
  }
  clearCart() {
    const jwtToken = localStorage.getItem('token');
    if (!jwtToken) {
      this.router.navigate(['/login']);
      // throw new Error('invalid Token');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return this.http.delete(this.url, { headers: headers });
  }
  updateCart(cart: any) {
    const jwtToken = localStorage.getItem('token');
    if (!jwtToken) {
      this.router.navigate(['/login']);
      // throw new Error('invalid Token');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return this.http.put(this.url, cart, { headers: headers });
  }
}