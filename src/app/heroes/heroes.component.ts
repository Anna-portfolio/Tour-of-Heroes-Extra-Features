import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ProfileControlService } from "../profile-control.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public isLoggedIn:boolean = false;

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService, private profile: ProfileControlService
    ) { }

  ngOnInit() {
    this.isLoggedIn = this.profile.loggedInStatus();
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  addHero(hero: Hero) {
    this.heroService.addHero(hero).subscribe((hero) => (this.heroes.push(hero)));
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}