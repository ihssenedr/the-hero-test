import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HeroComponent} from "./hero.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('HeroComponent', () => {
  let fixture : ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations : [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroComponent)
  });
  it('it should have the correct hero', () => {
    fixture.componentInstance.hero = {id: 11, name: 'Mr. Nice', strength: 10};

    expect(fixture.componentInstance.hero.name).toEqual('Mr. Nice');
  });

  it('it should render the hero name in anchor tag', () => {
    fixture.componentInstance.hero = {id: 11, name: 'Mr. Nice', strength: 10};
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector('a').textContent).toContain('Mr. Nice');
  });





})
