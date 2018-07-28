import { Component, OnInit } from '@angular/core';
import { Log } from './../../models/log';
import { LogService } from './../../services/log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  text: string;
  id: string;
  date: any;
  isNewLog = true;

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.selectLog.subscribe((log: Log) => {
      console.log('log : ', log);
      if (log.id) {
        this.isNewLog = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

  addLog() {
    if (this.isNewLog) {
      const newLog: Log = {
        id: this.getUniqueId(),
        text: this.text,
        date: new Date()
      };
      console.log('new Log : ', newLog);
      this.logService.addLog(newLog);
    } else {
      const updatedLog: Log = {
        id: this.id,
        text: this.text,
        date: new Date()
      };
      this.logService.updatedLog(updatedLog);
      this.clearLogState();
    }
  }

  clearLogState() {
    this.isNewLog = true;
    this.id = '';
    this.text = '';
    this.date = '';
    this.logService.changeState();
  }

  getUniqueId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      // tslint:disable-next-line:no-bitwise
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
