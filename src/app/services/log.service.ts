import { Log } from './../models/log';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateChange = this.stateSource.asObservable();

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

   setFormLog(log: Log) {
    this.logSource.next(log);
   }

   addLog(log: Log) {
      this.logs.unshift(log);
   }

   updatedLog(log: Log) {
    this.logs.forEach((element, index) => {
      if (log.id === element.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
   }

   deleteLog(log: Log) {
    this.logs.forEach((element, index) => {
      if (log.id === element.id) {
        this.logs.splice(index, 1);
      }
    });
   }

   changeState() {
     this.stateSource.next(true);
   }

}
