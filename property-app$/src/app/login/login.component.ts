import { Component } from '@angular/core';
import { PropertyService } from '../property.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginDetails!: FormGroup;
  errMessage: string = '';
  errStatus = false;
  data: any;
  hide: boolean = false;

  constructor(
    private fb: FormBuilder,
    private propertyService: PropertyService,
    private route: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.loginDetails = this.fb.group({
      usertype: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onFormSubmit() {
    let userObj = this.loginDetails.value;
    this.propertyService.loginUser(userObj).subscribe({
      next: (res) => {
        if (res == 'success') {
          this.errStatus = false;
          localStorage.setItem('userObj', JSON.stringify(userObj));
          this.propertyService.userLoginStatus = true;
          this.propertyService.currentUser = userObj;

          if (userObj.usertype === 'user') {
            this.route.navigateByUrl('/property-search');
          } else if (userObj.usertype === 'admin') {
            if (userObj.username == 'softwareadmin') {
              this.route.navigateByUrl('/softwareadmin');
            }

            // else if(userObj.username=="hardwareadmin"){
            //   this.route.navigateByUrl('/hardwareadmin')
            // }
            // else{
            //   this.route.navigateByUrl('/servicedesk')
            // }
          }
        } else {
          this.errStatus = true;
          this.errMessage = res;
        }
      },
      error: (err) => {
        console.log('user login error', err);
      },
    });
    this.sharedService.setUsername(userObj.username);
  }

  get username() {
    return this.loginDetails.get('username');
  }

  get password() {
    return this.loginDetails.get('password');
  }

  get usertype() {
    return this.loginDetails.get('usertype');
  }
}
