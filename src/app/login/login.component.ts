import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../services/validators';
import { ApiService, IUser } from '../services/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  inProcess = false;

  constructor(private fb: FormBuilder,
              private http: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.form = this.createForm();
  }

  onSubmit() {
    const data = this.form.value;

    this.inProcess = true;
    this.http.loginUser(data).valueChanges()
      .subscribe((value: IUser[]) => {
        this.inProcess = false;

        if (value.length) {
          this.router.navigate(['chat']);

          localStorage.setItem('user', JSON.stringify(value[0]));
        }
      });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        CustomValidators.checkPassword
      ]]
    });
  }

}
