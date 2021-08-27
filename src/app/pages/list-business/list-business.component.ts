import { Component, OnInit } from '@angular/core';
import DataSource from "devextreme/data/data_source";

interface Business {
  id: number;
  name: string;
  company: string;
}

const business: Business[] = [
  {
    id: 1,
    name: 'Axede',
    company: 'my company'
  },
  {
    id: 2,
    name: 'my second business',
    company: 'my company',
  },
  {
    id: 3,
    name: 'my business',
    company: 'my company',
  },
];

@Component({
  selector: 'app-list-business',
  templateUrl: './list-business.component.html',
  styleUrls: ['./list-business.component.scss'],
})
export class ListBusinessComponent implements OnInit {

  listDataSource = new DataSource({
    store: business,
    paginate: true,
    pageSize: 10
  })

  listBusiness = business;

  constructor() {}

  ngOnInit() {}

  updateRow(e: any) {
    console.log(e.data)
  }

  deleteRow(e: any) {
    console.log(e.data)
  }
}
