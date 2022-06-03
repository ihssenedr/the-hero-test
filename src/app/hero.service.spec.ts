import { TestBed } from "@angular/core/testing"
import { HeroService } from "./hero.service"
import { MessageService } from "./message.service"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
describe('HeroService', () => {
    let mockMessageService = jasmine.createSpyObj(['add'])
    let httpTestingControlleur : HttpTestingController
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers :[
                HeroService, 
                {provide : MessageService, useValue : mockMessageService}
            ], 
            imports : [HttpClientTestingModule]
        })
        httpTestingControlleur = TestBed.inject(HttpTestingController)
    })

})