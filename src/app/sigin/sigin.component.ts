

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {


  signinForm!:FormGroup
  constructor(private formbuilder:FormBuilder, private http:HttpClient,private router:Router) {} 
   ngOnInit(): void { this.signinForm=this.formbuilder.group({
    email:[""],
    pass:[""]
   });
  
  }

  signin(){
    this.http.get<any>('http://localhost:3000/user').subscribe(res=>{
     // alert("hai welcome");

      // console.log(res)
      const user = res.find((a:any)=>{
        return a.email===this.signinForm.value.email&&a.pass===this.signinForm.value.pass;

             });

        if(user){
          alert(" User exist")
          this.signinForm.reset();
        }     
             
  })
 
}
}


