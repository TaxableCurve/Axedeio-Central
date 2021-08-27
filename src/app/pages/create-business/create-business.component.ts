import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import CustomStore from 'devextreme/data/custom_store';
import {
  CitiesService,
  Departments,
} from '../../services/cities.service';

@Component({
  selector: 'app-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.scss'],
})
export class CreateBusinessComponent implements OnInit {
  error = undefined;
  departmentsWithCities: Departments[] = [];
  jsonDataStore: CustomStore;
  cities: string[] = [];
  stateOptions: {};
  formData = {};

  constructor(private http: HttpClient, private citiesService: CitiesService) {
    citiesService
      .getDepartments()
      .toPromise()
      .then((result) => {
        this.departmentsWithCities = result;
      })
      .catch(() => console.error);
    this.jsonDataStore = new CustomStore({
      key: 'id',
      loadMode: 'raw',
      load: () => {
        return this.departmentsWithCities;
      },
    });
    this.stateOptions = {
      placeholder: 'Select a state...',
      dataSource: this.jsonDataStore,
      valueExpr: 'id',
      displayExpr: 'departamento',
      onValueChanged: (e: any) => {
        this.cities = this.departmentsWithCities[e.value].ciudades;
      },
    };
  }

  async ngOnInit() {}

  countryOptions = {
    value: 'Colombia',
  };

  DepartmentSelected(e: any) {
    this.cities = this.departmentsWithCities[e.value].ciudades;
  }

  CitySelected(e: any) {
    console.log(e.value);
  }

  submitButtonOptions = {
    text: 'Submit',
    useSubmitBehavior: true,
    type: 'success',
    icon: 'fas fa-chevron-right',
  };

  form_fieldDataChanged(e: any) {
    this.formData = e.component.option('formData');
  }

  handleSubmit = (e: any) => {
    console.log('Formulario enviado:', this.formData);
    e.preventDefault();
  };
}
