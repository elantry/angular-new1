import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  alert = false;
  register = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private resto: RestoService) {}
  closealert() {
    this.alert = false;
  }
  collectRosto(): void {
    this.resto.saveuser(this.register.value).subscribe((res) => {
      console.log(res);
      this.alert = true;
      this.register.reset({});
    });
  }
}
