import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student_login';
  isShow:boolean=true;
  uname:any;
  password:any


    
  

  login(){
    this.isShow=false;
    if (this.uname="admin")  {
      
      
    }
  }
}
