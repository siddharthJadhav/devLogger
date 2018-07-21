import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { LogsComponent } from './components/logs/logs.component';
import { LogService } from './services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LogFormComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
