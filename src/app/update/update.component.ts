import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  editRosto = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private router: ActivatedRoute, private resto: RestoService) {}
  alert=false;
  closealert(){
    this.alert=false;
  }
  collection() {
    this.resto
      .updateResto(this.router.snapshot.params['id'], this.editRosto.value)
      .subscribe((res) => {
        console.log(res);
        this.alert=true;
      });
  }
  ngOnInit(): void {
    this.resto
      .getcurrentresto(this.router.snapshot.params['id'])
      .subscribe((res: { [x: string]: any }) => {
        this.editRosto = new FormGroup({
          name: new FormControl(res['name']),
          address: new FormControl(res['address']),
          email: new FormControl(res['email']),
        });
      });
  }
}
