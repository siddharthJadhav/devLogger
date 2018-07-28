import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/Log';
import { LogService } from './../../services/log.service';
@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs: Log[];
  selectedLog: Log;
  isDataLoaded = false;

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.stateChangeEvent();
    this.logService.getLogList().subscribe((logList: Log[]) => {
      this.logs = logList;
      this.isDataLoaded = true;
    });
  }

  onLogClick(log: Log) {
    this.selectedLog = log;
    this.logService.setFormLog(log);
  }

  deleteLog(log: Log) {
    this.logService.deleteLog(log);
  }

  stateChangeEvent() {
    this.logService.stateChange.subscribe(res => {
      console.log(res);
      this.selectedLog = {
        id: '',
        text: '',
        date: null
      };
    });
  }

}
