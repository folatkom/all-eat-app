import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      fullName: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
    });
  }
  login() {
    this.http.get<any>('http://localhost:3000/users').subscribe(res => {
      const user = res.find((a: any) => {
        return a.fullName === this.loginForm.value.fullName && a.password === this.loginForm.value.password;
      });
      if (user) {
        //alert('Zalogowano');
        this.loginForm.reset();
        this.router.navigate(['app/create-order']);
      } else {
        alert('Nieprawidłowe dane logowania');
      }
    });
  }
}
