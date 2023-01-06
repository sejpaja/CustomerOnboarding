import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'signup-component', component: SignupComponent },
  { path: 'homepage-componenet', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
