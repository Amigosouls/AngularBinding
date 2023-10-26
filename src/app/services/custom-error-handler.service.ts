import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class CustomErrorHandlerService implements ErrorHandler {

  constructor(private message:MessageService, private zone:NgZone) { }
  handleError(error:unknown){
    this.zone.run(()=>{
      this.message.add({ severity: 'error', summary: 'Failed!', detail: "Some Error Occured!" });
    })
   
  }
}
