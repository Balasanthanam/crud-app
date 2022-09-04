import { Component } from '@angular/core';
// import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Details';
  isname:boolean=false;
  name:any;
  num:number =0;
  x:any[]=[];
  users:any;
  isUpdate:boolean=false;
  isShow:boolean =false;
  submit(){
    if(!this.isUpdate){
      this.x.push(this.name)
      console.log(this.x)
    }
    else{
      
    this.x.splice(this.num,1,this.name)
    this.isUpdate =false;
    this.num=0;
    }
    
    
  }
  onEdit(array:any){
    this.isUpdate =true;
    this.name=array;
    this.num=this.x.indexOf(array);
    console.log(this.num)
  }
  onDlt(array:any){
    //this.x.pop(array)
    var num=this.x.indexOf(array);
    console.log(num)
    this.x.splice(num,1)
    console.log(this.x)
    }

    onMouseOver(data:any){
      console.log(data)
      this.isShow =true;
      console.log("onMouseOver")
    }
    onmouseleave(){
      this.isShow=false;
      console.log(this.isShow)
    }
  
}
