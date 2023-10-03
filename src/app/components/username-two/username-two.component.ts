import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MessageModel } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-username-two',
  templateUrl: './username-two.component.html',
  styleUrls: ['./username-two.component.scss'],
})
export class UsernameTwoComponent implements OnInit, AfterViewInit {
  messegeTwo: string = '';
  messagesTwo: MessageModel[] = [];
  isUserTyp: boolean = false;
  @ViewChild('messageConteiner') messageConteiner!: ElementRef<HTMLElement>;
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessage().subscribe((message) => {
      this.messagesTwo = message;
      if (this.messageConteiner) {
        setTimeout(() => {
          this.messageConteiner.nativeElement.scrollTop =
            this.messageConteiner.nativeElement.scrollHeight;
        }, 100);
      }
    });
    this.messageService.getUserTwoTypeMessage().subscribe((isUserType) => {
      this.isUserTyp = isUserType !== '';
    });
  }
  ngAfterViewInit(): void {}

  public userType(text: string): void {
    this.messageService.userOneTypes(text);
  }

  addMessageTwo() {
    const mesage: MessageModel = {
      messageUserTwo: this.messegeTwo.trimStart(),
      data: new Date(),
    };
    if (this.messegeTwo !== '') {
      this.messageService.addNewMessage(mesage);
    }
    this.messegeTwo = '';
    this.messageService.userOneTypes('');
    console.log(this.messagesTwo);
  }
}
