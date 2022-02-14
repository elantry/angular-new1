import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private resto: RestoService) {}
  collection: any[] = [];
  ngOnInit(): void {
    this.resto.getList().subscribe((res) => {
      console.warn(res);
      this.collection = <any>res;
    });
  }
  deleteRosto(item: { id: any }) {
    let index = this.collection.indexOf(<any>item);
    this.resto.delete(item).subscribe((res) => {
      this.collection.splice(index, 1);
      //this.collection.splice(item.id - 1, 1);
    });
  }
}
