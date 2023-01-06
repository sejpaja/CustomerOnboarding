import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName: string = "";
  lastName: string = "";
  show: boolean = true;

  submit() {
    console.log("")
    this.clear();
  }

  clear() {
    this.firstName = "";
    this.lastName = "";
  }
}
