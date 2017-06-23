import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { "id": 1, "name": "Apple iPhone 5", "price": 30800, "imageSrc": "/assets/iphone7-plus.png" },
      { "id": 2, "name": "Apple iPhone 5s", "price": 41800, "imageSrc": "/assets/iphone7-plus.png" },
      { "id": 3, "name": "Apple iPhone SE", "price": 52800, "imageSrc": "/assets/iphone7-plus.png" },
      { "id": 4, "name": "Apple iPhone 6", "price": 59800, "imageSrc": "/assets/iphone7-plus.png" },
      { "id": 5, "name": "Apple iPhone 6s", "price": 63800, "imageSrc": "/assets/iphone7-plus.png" },
      { "id": 6, "name": "Apple iPhone 7", "price": 71800, "imageSrc": "/assets/iphone7-plus.png" },
      { "id": 7, "name": "Apple iPhone 8", "price": 100800, "imageSrc": "/assets/iphone7-plus.png" },
      { "id": 8, "name": "Samsung Galaxy", "price": 30800, "imageSrc": "/assets/samsung-s8.png" },
      { "id": 9, "name": "Samsung Galaxy s2", "price": 11800, "imageSrc": "/assets/samsung-s8.png" },
      { "id": 10, "name": "Samsung Galaxy s3", "price": 22800, "imageSrc": "/assets/samsung-s8.png" },
      { "id": 11, "name": "Samsung Galaxy s4", "price": 39800, "imageSrc": "/assets/samsung-s8.png" },
      { "id": 12, "name": "Samsung Galaxy s5", "price": 43800, "imageSrc": "/assets/samsung-s8.png" },
      { "id": 13, "name": "Samsung Galaxy s6", "price": 51800, "imageSrc": "/assets/samsung-s8.png" },
      { "id": 14, "name": "Samsung Galaxy s7", "price": 60800, "imageSrc": "/assets/samsung-s8.png" },
      { "id": 15, "name": "Samsung Galaxy s8", "price": 70800, "imageSrc": "/assets/samsung-s8.png" }
    ];
    return { products };
  }
}