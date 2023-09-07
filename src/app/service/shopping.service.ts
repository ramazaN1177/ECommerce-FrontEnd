import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  apiUrl:string = 'https://localhost:7189/api/v1'
  constructor(private http:HttpClient) { }
  AddToCart(){

  }
}
