import { Component } from '@angular/core';
import { PropertyService } from '../property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(
    private propertyService: PropertyService,
    private route: Router
  ) {}

  userRegistered: boolean = false;

  onSignup(userObj: any) {
    console.log(userObj);

    this.propertyService.createUser(userObj).subscribe({
      next: (res) => {
        console.log(res);
        this.route.navigate(['/login'], {
          queryParams: { registered: 'true' },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
