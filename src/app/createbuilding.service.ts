import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CreatebuildingService {

  constructor(private http: HttpClient) { }
  createBuildings(createbuilding) {
    debugger;
    const url='http://localhost:3000/api/addfacility';
    const obj = {
      fac: createbuilding,
      employeekey: 2861,
      OrganizationID:21
     };
    return this
      .http
      .post (url,obj).subscribe(res => console.log('Done'));

  }
}
