import {MessageService} from "./message.service";

describe('MessageService', () => {
  let service : MessageService;

  beforeEach( ()=> {
    service = new MessageService();
  });

  it('it should have no messages to start', () => {
    expect(service.messages.length).toBe(0)
  })


})
