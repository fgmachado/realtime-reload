import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerSentEventService {

  constructor() { }

  public getEventSource(url: string): EventSource {
    return new EventSource(url);
  }

}
