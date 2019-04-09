import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-certificate',
  templateUrl: './create-certificate.component.html',
  styleUrls: ['./create-certificate.component.css']
})
export class CreateCertificateComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }


createCertificate()  {
  
    this.httpClient.post(`http://localhost:5555/cert`,{})
    
    .subscribe(
      (data:any) => {
        console.log(data);
      }
    )
  }
}
