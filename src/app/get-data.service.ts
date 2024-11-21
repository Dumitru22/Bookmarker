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
        description: 'description',
        date: '2024-01-01T12:00:00.000Z'
      },
      {
        id: 2,
        name: 'UX',
        description: 'description',
        date: '2024-01-01T12:00:00.000Z'
      },
      {
        id: 3,
        name: 'JavaScript',
        description: 'description',
        date: '2024-11-20T16:42:06.022Z'
      },
      {
        id: 4,
        name: 'TypeScript',
        description: 'description',
        date: '2024-11-21T16:42:06.022Z'
      }
    ];
    return { products };
  }

  constructor() { }
}
