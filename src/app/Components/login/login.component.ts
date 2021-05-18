import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginData } from 'src/app/Datamodels/loginData';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor() { }
	loginData : LoginData = {
		email : "",
		password : ""
	}

	ngOnInit(): void {
	}

	loginForm = new FormGroup({
		email : new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
		password : new FormControl('', [Validators.required])
	});

	get email() {
		return this.loginForm.get('email') as FormControl
	}

	get password() {
		return this.loginForm.get('password') as FormControl;
	}

}
