import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserregisterService } from 'src/shared/userregister.service';
import { UserdetailsComponent } from './servicecommunication/userdetails/userdetails.component';
import { UserregisterComponent } from './servicecommunication/userregister/userregister.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    UserregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [UserregisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
