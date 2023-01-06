import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  show: boolean = true;

  constructor(private http: HttpClient, private router: Router) {
    this.show = true;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  submit() {
    let response: any;
    console.log("user name is " + this.username)
    // this.http.post('http://localhost:8080/authorize/user', { 'userName': this.username, 'password': this.password }).
    //   subscribe(data => {
    //     response = data;
    //   })
    console.log("Response is " + response)
    this.clear();
    this.router.navigateByUrl('/homepage-componenet');
  }

  clear() {
    this.username = "";
    this.password = "";
    this.show = false;
  }

  signuo() {
    this.router.navigateByUrl('/signup-component');
    this.show = false;
  }

  forgotPassword() {

  }
}
