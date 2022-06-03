import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {HeroesComponent} from "./heroes.component";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { HeroComponent } from "../hero/hero.component";
import { By } from "@angular/platform-browser";

describe('HeroesComponent (shallow)', () => {
  let fixture : ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES



  beforeEach(() => {
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero' , 'deleteHero'])
    HEROES = [
      { id: 11, name: 'Mr. Nice', strength: 10 },
      { id: 12, name: 'Narco', strength: 5 },
      { id: 13, name: 'Bombasto', strength: 8 },
      { id: 14, name: 'Celeritas', strength: 15 },
    ]
    TestBed.configureTestingModule({
      declarations : [HeroesComponent, HeroComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide : HeroService, useValue : mockHeroService}]
    });
    fixture = TestBed.createComponent(HeroesComponent)
    
  });
  it('it should set heros correctly from service', () => {
      mockHeroService.getHeroes.and.returnValue(of(HEROES))
      fixture.detectChanges()
      expect(fixture.componentInstance.heroes.length).toBe(4)
  });

  it('it should render each hero as HeroComponent' , () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES))
    fixture.detectChanges()

    const heroCompDEs = fixture.debugElement.queryAll(By.directive(HeroComponent))
    expect(heroCompDEs.length).toBe(4)
  })






})
