import { PasswordValidators } from './password.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactive-forms';
  changePasswordForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['',
      Validators.required,
      PasswordValidators.validOldPassword],
      newPassword: ['',Validators.required],
      confirmPassword: ['',Validators.required],
    },{validator:PasswordValidators.passwordShouldMatch});
  }
  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }
  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }
  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }
  changePassword() {
    if(this.newPassword.value === this.confirmPassword.value){
      if(this.newPassword.value != '' && this.confirmPassword.value != ''){
      console.log(this.changePasswordForm.value);
      }
    }
  }
  // courses = [1,2];
  // registerationForm = new FormGroup({
  //   userName : new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl('')
  // });
}
