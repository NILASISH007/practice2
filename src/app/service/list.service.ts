import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  public list: any[] = [
    { name: 'Nilasish Banerjee', Age: 25, Gender: 'Male' },
    { name: 'Soma Banerjee', Age: 45, Gender: 'Female' },
    { name: 'Debasish Banerjee', Age: 55, Gender: 'Male' },
  ];
  constructor() {}

  getList()
  {
    return this.list;
  }
}
