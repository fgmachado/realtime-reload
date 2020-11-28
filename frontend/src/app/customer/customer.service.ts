import { EventEmitter, Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerSentEventService } from '../server-sent-event.service';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private serverSentEventService: ServerSentEventService, private _zone: NgZone) { }

  findAll(): EventEmitter<Customer> {
    const eventSource = this.serverSentEventService.getEventSource("http://localhost:8080/api/customers");
    let eventEmitter = new EventEmitter<Customer>(true);

    eventSource.onmessage = event => {
      this._zone.run(() => {
        eventEmitter.emit(JSON.parse(event.data));
      });
    };

    return eventEmitter;
  }

  findAllByTenant(): EventEmitter<Customer> {
    const eventSource = this.serverSentEventService.getEventSource("http://localhost:8080/api/customers/1234abc");
    let eventEmitter = new EventEmitter<Customer>(true);

    eventSource.onmessage = event => {
      this._zone.run(() => {
        eventEmitter.emit(JSON.parse(event.data));
      });
    };

    return eventEmitter;
  }

}
