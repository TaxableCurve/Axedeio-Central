import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Business {
  BusinessID: number;
  BusinessGUID: number;
  CompanyID: number;
  CompanyGUID: number;
  Name: string;
  Address?: string;
  Telephone?: string;
  Mobile?: string;
  Email?: string;
  DateCreated?: Date;
  CityID?: number;
  City?: string;
  State?: string;
  Country?: string;
  Tags?: string;
}

@Injectable({
  providedIn: 'root',
})

export class BusinessService {
  constructor(private http: HttpClient) {}
}
