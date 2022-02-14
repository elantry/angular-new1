import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RestoService {
  url = 'http://localhost:3000/restaurants';
  urlnew = 'http://localhost:3000/';
  constructor(private Http: HttpClient) {}
  getList() {
    return this.Http.get(this.url);
  }
  saveResto(data: any) {
    return this.Http.post(this.url, data);
  }
  delete(item: any) {
    return this.Http.delete(this.url + '/' + item.id);
  }
  getcurrentresto(id: any) {
    return this.Http.get(this.url + '/' + id); //foredit
  }
  updateResto(id: any, data: any) {
    return this.Http.patch(this.url + '/' + id, data); //foredit
  }
  saveuser(data: any) {
    return this.Http.post(this.urlnew + 'users', data);
  }
}
