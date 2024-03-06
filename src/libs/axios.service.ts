import { Injectable } from '@angular/core';
import api from './axios';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  constructor() {}

  getResumes() {
    return api.get('/pessoa');
  }

  getCompleteResume() {
    return api.get('/completeResume');
  }
}
