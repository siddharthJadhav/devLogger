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

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.selectLog.subscribe((log: Log) => {
      console.log('log : ', log);
      if (log.id) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

}
