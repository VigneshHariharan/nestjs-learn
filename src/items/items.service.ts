import { Injectable } from '@nestjs/common';
import { Item } from './types/items.types';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: 200000,
      name: 'Seiya',
      specialty: 'Overly Cautious',
      status: 1,
    },
    {
      id: 100,
      name: 'Naofumi',
      specialty: 'Highly Keen',
      status: 2,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findById(id: number): Item | string {
    let resultItem: Item;
    this.items.forEach(item => {
      if (item.id === Number(id)) {
        resultItem = item;
      }
    });
    if (resultItem) {
      return resultItem;
    }
    return `Given id (${id}) is not available`;
  }
}
