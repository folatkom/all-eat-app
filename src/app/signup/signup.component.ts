import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/app.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
    });
  }
  signup() {
    this.http.post<any>('http://localhost:3000/users', this.signupForm.value).subscribe(res => {
      alert('Zarejestrowano użytkownika');
      this.signupForm.reset();
      this.router.navigate(['auth']);
    });
  }
}
