import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  amount: number | '' = '';
  years: number | '' = '';
  rate: number | '' = '';
  type: string = '';

  constructor() {}
}
