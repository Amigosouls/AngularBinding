import { ErrorHandler, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import  { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MessageService} from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CustomErrorHandlerService } from './services/custom-error-handler.service';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    ToastModule,
    BrowserAnimationsModule,
    ProductsComponent
  ],
  providers: [MessageService,
    {
          provide:ErrorHandler,
          useClass:CustomErrorHandlerService
        }],
  bootstrap: [AppComponent]
})
export class AppModule { }
