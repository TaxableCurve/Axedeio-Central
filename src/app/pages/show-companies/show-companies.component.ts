import { Component, OnInit } from '@angular/core';
import { Companies } from '../../services/companies.service';

@Component({
  selector: 'app-show-companies',
  templateUrl: './show-companies.component.html',
  styleUrls: ['./show-companies.component.scss'],
})
export class ShowCompaniesComponent implements OnInit {
  company: Companies = {
    CompaniesID: 1,
    CompaniesGUID: 1,
    Name: 'Axede',
    Address: 'Av Siempre Viva',
    Telephone: '1234567',
    Mobile: '1234567890',
    Email: 'axede@axede.com.co',
    DateCreated: new Date(),
    CityID: 29,
    City: 'Cali',
    State: 'Valle del Cauca',
    Country: 'Colombia',
  };

  isFormEditable: boolean | undefined = false;

  editButtonOptions = {
    text: 'Save',
    icon: 'far fa-save',
    type: 'default',
  };

  constructor() {}

  ngOnInit() {}

  onSubmit(e: any) {
    e.preventDefault();
  }
}
