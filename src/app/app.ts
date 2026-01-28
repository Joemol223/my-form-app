import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-form-app');
  userName = "";
  userEmail = "";
  userGender = "";
  termsAccepted = false;
  subscription = '';
  formSubmitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      console.log("Form Data: ", form.value);
      this.formSubmitted = true;

      form.resetForm();        // resets the form
      this.userName = '';
      this.userEmail = '';
      this.userGender = '';
      this.termsAccepted = false;
      this.subscription = '';
    }
  }
}
