import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { UsernameOneComponent } from './components/username-one/username-one.component';
import { UsernameTwoComponent } from './components/username-two/username-two.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, UsernameOneComponent, UsernameTwoComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatIconModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
