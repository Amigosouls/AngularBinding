import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { Observable, catchError, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient:HttpClient) { }

  // public productList = toSignal<Product[]>(this.httpClient.get<Product[]>("http://localhost:3000/item").pipe(
  //   catchError(err=>of([]))
  // ))
  public getItems(){
    return this.httpClient.get<Product[]>("http://localhost:3000/items").pipe(
      catchError(err=>of([]))
    )
  }
  
  public cartItems = signal<Product[]>([]);
  public totalItems = computed(()=>this.cartItems.length);
  addProductSignal(product:Product){
    this.cartItems.mutate((val)=>
    val.push(product));
  }

  removeProductSignal(id:number){
    this.cartItems.mutate((val)=>{
      val.splice(id,1);
    });
  }


  // getItems(page:number =1,itemsPerPage=10):Observable<Product[]>{
  //   const totalItems = this.productList()?.length;
  //   const startIndex = (page-1)*itemsPerPage;
  //   const endIndex = startIndex+itemsPerPage;
  //   const items:Product[]=[];
  //   for(let i=startIndex;i<endIndex; i++){
  //     if(i<(totalItems==null ? 100:totalItems)){
  //       for (const prod of this.productList()) {
          
  //       }
  //     }
  //   }
  // }
}
