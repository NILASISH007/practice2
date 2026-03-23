import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit {
  public tableList: any[] = [];


  constructor(
    private userList:ListService
  ){}
  ngOnInit() {
    this.getTableList();
  }

  getTableList()
  {
   this.tableList= this.userList.getList();
  }
}
