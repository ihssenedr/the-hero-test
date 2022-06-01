import {HeroesComponent} from "./heroes.component";
import {of} from "rxjs";
import {Hero} from "../hero";


describe('HeroesComponent', () => {
  let component : HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 11, name: 'Mr. Nice', strength: 10 },
      { id: 12, name: 'Narco', strength: 5 },
      { id: 13, name: 'Bombasto', strength: 8 },
      { id: 14, name: 'Celeritas', strength: 15 },
    ]
    mockHeroService = jasmine.createSpyObj(['getHeroes' , 'addHero' , 'deleteHero'])

    component = new HeroesComponent(mockHeroService)
  })
  describe('add', () => {
    it('should call addHero', async () =>{
      mockHeroService.addHero.and.returnValue(of())
      component.heroes = HEROES

      component.add('SuperDude')

      expect(mockHeroService.addHero).toHaveBeenCalled()
    })

  })

  describe('get' , () => {

    it('should get heroes and return list of heroes', async () => {
      //Arrange
      const response : Hero[] = []
      mockHeroService.getHeroes.and.returnValue(of(response))

      //Act
      component.getHeroes()

      //Assert
      expect(component.heroes).toBeGreaterThanOrEqual(0)
    })

  })
  describe('delete' , () => {

    it('should remove the indicated hero from the heroes list', () => {
      //Arrange
      mockHeroService.deleteHero.and.returnValue(of(true))
      component.heroes = HEROES

      //Act
      component.delete(HEROES[2])

      //Assert
      expect(component.heroes).toEqual([HEROES[0], HEROES[1], HEROES[3]])
    })

    it('should call deleteHero with the correct hero', () => {
      //Arrange
      mockHeroService.deleteHero.and.returnValue(of(true))
      component.heroes = HEROES

      //Act
      component.delete(HEROES[2])

      //Assert
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2])
    })
  })
})
