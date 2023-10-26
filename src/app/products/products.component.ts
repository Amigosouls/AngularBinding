import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Product } from '../models/product';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone:true,
  providers:[MessageService],
  imports:[ToastModule, CommonModule, BrowserAnimationsModule]
})
export class ProductsComponent implements OnInit {
 public products$!:Observable<Product[]>;
 constructor(public productService:ProductServiceService, private httpClient:HttpClient, private message:MessageService) {

 }
ngOnInit(): void {
   this.products$=this.productService.getItems();
   console.log("hey")
}
 
 printError(){
  try{
    setTimeout(() => {
      throw TypeError("There was a error occured")
    }, 3000);
  }
  catch (error){
   // throw TypeError("There was a error occured")
  }
 }
}
