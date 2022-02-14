import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  alert = false;
  addRosto = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),//formcontrol
  });
  constructor(private resto: RestoService) {}
  closealert() {
    this.alert = false;
  }
  collectRosto() {
    this.resto.saveResto(this.addRosto.value).subscribe((res) => {
      console.log(res);
      this.alert = true;
      this.addRosto.reset({});
    });
  }

}
