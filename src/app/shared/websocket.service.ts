import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  ws: WebSocket;
  constructor() { }

  createObservableSocket(url: string, id: number): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable<string>(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = () => observer.complete();
        this.ws.onopen = () => this.sendMessage({productId: id});
        return () => this.ws.close();
      }
    ).map(message => JSON.parse(message + ''));
  }

  sendMessage(message: any) {
      const msg = JSON.stringify(message);
      this.ws.send(msg);
  }
}
