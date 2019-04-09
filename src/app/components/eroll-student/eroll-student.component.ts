import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-eroll-student',
  templateUrl: './eroll-student.component.html',
  styleUrls: ['./eroll-student.component.css']
})
export class ErollStudentComponent implements OnInit {


  /*declared variables and validations*/

  public cert_PRno:any;  
  public firstName:any;
  public secondName:any;
  public Surname:any;
 public collegeName:any;
  public Branch:any;
  public YOP:any;
  public emailId:any;
  public mobileNumber:any;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }


 /*function to enroll student*/
 enrollStudent()
 {
   this.httpClient.post(`http://localhost:5555/cert`,{})
 
 .subscribe(
   (data:any) => {
     console.log(data);
       }
     
   
   )
 }


}
