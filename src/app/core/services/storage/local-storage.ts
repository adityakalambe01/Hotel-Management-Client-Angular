import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {

  constructor() { }
  protected setItem(key: string, value: any) {
    localStorage.setItem(key, value);
  }
  protected getItem(key: string) {
    return localStorage.getItem(key);
  }
  protected removeItem(key: string) {
    localStorage.removeItem(key);
  }

  protected clear() {
    localStorage.clear();
  }
}
