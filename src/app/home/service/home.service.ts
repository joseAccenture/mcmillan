import { Injectable } from '@angular/core';
import { user } from '../../user';
import { USERS } from '../../../assets/mock/mock-user';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
    getUsers(): user[] {
        return USERS;
      }
        constructor() {
            
        }

}