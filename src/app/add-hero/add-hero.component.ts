import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css'],
})
export class AddHeroComponent implements OnInit {
  @Output() onAddHero: EventEmitter<Hero> = new EventEmitter();
  hero: Hero | undefined;
  id?: any;
  name: string = '';
  position: string = '';
  
  constructor(private route: ActivatedRoute, private heroService: HeroService
    ) { }

   ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  onSubmit() {
    if (!this.name) {
      alert('Please add a name!');
      return;
    }
    
    if (!this.position) {
      alert('Please choose a position!');
      return;
    }
    
    const newHero = {
      id: this.id,
      name: this.name,
      position: this.position,
    };
    
    this.onAddHero.emit(newHero);

    this.name = '';
    this.position = '';
  
  }
}