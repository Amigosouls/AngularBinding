import { Component, computed, signal } from '@angular/core';
import { Product } from './models/product';
import { ProductServiceService } from './services/product-service.service';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import {MessageService} from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBinding';

 constructor(public productService:ProductServiceService, private httpClient:HttpClient, private message:MessageService) {

 }
 public products: Product[] = [];
 
 printError(){
  throw TypeError("There was a error occured")
 }
}
