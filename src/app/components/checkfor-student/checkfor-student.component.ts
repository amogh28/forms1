import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-checkfor-student',
  templateUrl: './checkfor-student.component.html',
  styleUrls: ['./checkfor-student.component.css']
})
export class CheckforStudentComponent implements OnInit {



  public studentName:any;
  public collegeName:any;
  public seatNumber:any;
 public Examination:any;
  public YOP:any;
  public emailId:any;
  public Branch:any;
  public mobileNumber:any;







  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  
/*
  findStudent(){

    this.httpClient.get(`http://localhost:5555/cert/?Seat_no=${this.PRno}`).subscribe(
      (data:any[]) => {
        if(data.length) {
         console.log(data);
          
        }
      }
    
  
    )
  
  }
  
  */
}
