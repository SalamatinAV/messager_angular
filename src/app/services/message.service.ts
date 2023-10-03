import { Injectable } from '@angular/core';
import { MessageModel } from '../models/message';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: MessageModel[] = [];
  private message$: Subject<MessageModel[]> = new Subject();
  private observableUserOneTypesMessage$: Subject<string> = new Subject();
  private observableUserTwoTypesMessage$: Subject<string> = new Subject();

  constructor() {}

  getMessage(): Subject<MessageModel[]> {
    return this.message$;
  }
  addNewMessage(mes: MessageModel): void {
    this.messages.push(mes);
    this.message$.next(this.messages);
  }

  // User One
  public getUserOneTypeMessage(): Subject<string> {
    return this.observableUserOneTypesMessage$;
  }

  public userOneTypes(message: string): void {
    console.log(message);
    this.observableUserOneTypesMessage$.next(message);
  }

  // User Two

  public getUserTwoTypeMessage(): Subject<string> {
    return this.observableUserTwoTypesMessage$;
  }
  public userTwoTypes(message: string): void {
    this.observableUserTwoTypesMessage$.next(message);
  }
}
