import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl,FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule,Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Practicecourse2';

  //FormModule Example
  user = { name: '', email: '' };//object
  submittedName = '';
  submittedEmail = '';

  onSubmit(form: any) {//form object as parameter
    this.submittedName = this.user.name;
    this.submittedEmail = this.user.email;
    form.resetForm();
  }

  //ReactiveFormModule Example
  
  //name=new FormControl("");
  user2={
    name:new FormControl(""),
    email:new FormControl("")
  }

  submittedName2 = '';
  submittedEmail2 = '';
  ShowSubmit(){
    this.submittedName2 = this.user2.name.value!;
    this.submittedEmail2 = this.user2.email.value!;
  }

  //FormGroup Example
  user3= new FormGroup({
    name:new FormControl(""),
    email:new FormControl("")
  })

  submittedName3 = '';
  submittedEmail3 = '';
  
  GroupSubmit(){
    alert(
      this.user3.value.name +
      '~' +
      this.user3.value.email
    );
    this.submittedName3=this.user3.value.name ?? "";
    this.submittedEmail3=this.user3.value.email?? "";
  }
}
