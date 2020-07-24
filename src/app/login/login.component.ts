import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {



  userFresh=new User('','',false);


  constructor(private _route:Router) { }

  ngOnInit(): void {
  }


LoginUser(){
 

 if( this.userFresh.uname !=="Kishan"){
  console.error("UserName not matching")
alert("Check UserName")
}

 else if(this.userFresh.code !=="Cango" )
    
{console.error("Password not matching")
alert("Check Password")
}

else{
  this._route.navigate(['./app-page'])
console.log("Credentials Matched")

}

}
}
