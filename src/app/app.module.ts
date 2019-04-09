import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErollStudentComponent } from './components/eroll-student/eroll-student.component';
import { HttpClientModule} from '@angular/common/http';
import { CheckforStudentComponent } from './components/checkfor-student/checkfor-student.component';
import { CreateCertificateComponent } from './components/create-certificate/create-certificate.component';
@NgModule({
  declarations: [
    AppComponent,
    ErollStudentComponent,
    CheckforStudentComponent,
    CreateCertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
