import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css'],
})
export class SearchListComponent implements OnInit {
  public searchText:any='';
  public userList: any[] = [
    { name: 'Nilasish Banerjee', Age: 25, Gender: 'Male' },
    { name: 'Soma Banerjee', Age: 45, Gender: 'Female' },
    { name: 'Debasish Banerjee', Age: 55, Gender: 'Male' },
  ];

  ngOnInit() {
    // this.filterList;
  }

 get filterList()
  {
    return this.userList.filter(
      (user) =>
        user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.Gender.toLowerCase()
          .substring(0, 2)
          .includes(this.searchText.toLowerCase().substring(0, 2))
    );
  }

}
