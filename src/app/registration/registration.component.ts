import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../services/validators';
import { ApiService } from '../services/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  isAdded = false;

  constructor(private fb: FormBuilder,
              private http: ApiService) {}

  ngOnInit() {
    this.form = this.createForm();
  }

  onSubmit() {
    const data = this.form.value;

    this.http.createNewUser(data)
      .then(() => {
          this.showSuccessMessage();
          this.form.reset();
      });
  }

  private showSuccessMessage() {
      this.isAdded = true;

      setTimeout(() => {
        this.isAdded = false;
      }, 3000);
  }

  private createForm() {
    return this.fb.group({
      name: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        CustomValidators.checkPassword
      ]],
      life: ['']
    });
  }

}
