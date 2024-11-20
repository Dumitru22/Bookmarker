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
        name: 'Angular Material Guide',
        description: 'Learn how to design modern, responsive UIs with Angular Material.',
        date: '2024-01-01T12:00:00.000Z'
      },
      {
        id: 2,
        name: 'UX Design Principles',
        description: '10 tips to improve your app’s user experience and usability.',
        date: '2024-01-01T12:00:00.000Z'
      },
      {
        id: 3,
        name: 'JavaScript Best Practices___1',
        description: 'Write cleaner and more maintainable JavaScript code.',
        date: '2024-11-20T16:42:06.022Z'
      },
      {
        id: 4,
        name: 'JavaScript Best Practices___2',
        description: 'Write cleaner and more maintainable JavaScript code.',
        date: '2024-01-01T12:00:00.000Z'
      },
      {
        id: 5,
        name: 'JavaScript Best Practices___2',
        description: 'Write cleaner and more maintainable JavaScript code.',
        date: '2024-11-19T12:00:00.000Z'
      },
    ];
    return { products };
  }

  constructor() { }
}
