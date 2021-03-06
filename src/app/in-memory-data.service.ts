import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = [
      { id: 1, name: 'Ovo de Pascoa', price: 15.50 },
      { id: 2, name: 'Bolo de Festa', price: 25.30 },
      { id: 3, name: 'Tapete de Cozinha', price: 190.00 },
      { id: 4, name: 'Tapete de Banheiro', price: 120.00 }
    ];
    return { products };
  }
}
