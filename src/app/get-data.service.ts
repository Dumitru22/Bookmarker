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
        name: 'Angular Material Guide',
        description: 'Learn how to design modern, responsive UIs with Angular Material.',
        date: '2024-01-01T12:00:00.000Z'
      },
      {
        name: 'UX Design Principles',
        description: '10 tips to improve your app’s user experience and usability.',
        date: '2024-01-01T12:00:00.000Z'
      },
      {
        name: 'JavaScript Best Practices',
        description: 'Write cleaner and more maintainable JavaScript code.',
        date: '2024-01-01T12:00:00.000Z'
      },
      {
        name: 'JavaScript Best Practices',
        description: 'Write cleaner and more maintainable JavaScript code.',
        date: '2024-01-01T12:00:00.000Z'
      },
    ];
    return { products };
  }

  constructor() { }
}