import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Axede.io Central';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
