import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', position: 'Frontend Developer' },
      { id: 12, name: 'Narco', position: 'Backend Developer' },
      { id: 13, name: 'Bombasto', position: 'Frontend Developer' },
      { id: 14, name: 'Celeritas', position: 'Fullstack Developer' },
      { id: 15, name: 'Magneta', position: 'Backend Developer' },
      { id: 16, name: 'RubberMan', position: 'Frontend Developer' },
      { id: 17, name: 'Dynama', position: 'Fullstack Developer' },
      { id: 18, name: 'Dr IQ', position: 'Backend Developer' },
      { id: 19, name: 'Magma', position: 'Fullstack Developer' },
      { id: 20, name: 'Tornado', position: 'Fullstack Developer' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}