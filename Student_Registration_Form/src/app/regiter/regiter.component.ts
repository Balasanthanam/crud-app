import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.css']
})
export class RegiterComponent implements OnInit {
  userForm: FormGroup;
  listData:any

  constructor(private fb:FormBuilder) { 
    this.listData=[];
    this.userForm=this.fb.group({
      Name:['',Validators.required],
      Email:['',Validators.required],
      MobileNumber:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  public addItem():void{
    this.listData.push(this.userForm.value);
    console.log(this.listData)
    this.userForm.reset();

  }
  Reset(){
    this.userForm.reset();
  }
  removeItem(element: any){
    this.listData.forEach((value: any,index: any)=>{
      if(value== element)
      this.listData.splice(index,1);
    } );
  }
  
  

}
