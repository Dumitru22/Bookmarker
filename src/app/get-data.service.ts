import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../assets/product-interface';

@Injectable({
  providedIn: 'root'
})
export class MockDbService implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      {
        id: 1,
        name: 'Angular',
        url: 'https://angular.dev/',
        date: '2024-01-01T12:00:00.000Z'
      },
      {
        id: 2,
        name: 'NgXs',
        url: 'https://www.ngxs.io/',
        date: '2024-01-01T12:00:00.000Z'
      },
      {
        id: 3,
        name: 'NgRx',
        url: 'https://ngrx.io/',
        date: '2024-01-01T12:00:00.000Z'
      },
      {
        id: 4,
        name: 'JavaScript',
        url: 'https://www.javascript.com/',
        date: '2024-11-20T16:42:06.022Z'
      },
      {
        id: 5,
        name: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
        date: '2024-11-21T16:42:06.022Z'
      }
    ];
    return { products };
  }
}
