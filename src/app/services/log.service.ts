import { Log } from './../models/log';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs: Log[];

  constructor() {
    this.logs = [{
      id: '1', text: 'Genrate Combonents', date: new Date('12/27/2017 12:13:14')
    }, {
      id: '2', text: 'Add Bootstrap', date: new Date('12/27/2017 1:13:14')
    }, {
      id: '3', text: 'Genrate Logs', date: new Date('12/27/2017 2:13:14')
    }];
   }

   getLogList() {
     return this.logs;
   }

}
