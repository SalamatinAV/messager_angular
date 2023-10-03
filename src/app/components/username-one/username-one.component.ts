import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageModel } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-username-one',
  templateUrl: './username-one.component.html',
  styleUrls: ['./username-one.component.scss'],
})
export class UsernameOneComponent implements OnInit {
  messegeOne: string = '';
  messagesOne: MessageModel[] = [];
  isUserType: boolean = false;
  @ViewChild('messageContainer') messageContainer!: ElementRef<HTMLElement>;
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessage().subscribe((message) => {
      this.messagesOne = message;
      if (this.messageContainer) {
        setTimeout(() => {
          this.messageContainer.nativeElement.scrollTop =
            this.messageContainer.nativeElement.scrollHeight;
        }, 100);
      }
    });

    this.messageService.getUserOneTypeMessage().subscribe((isUserType) => {
      this.isUserType = isUserType !== '';
    });
  }

  // ngAfterViewInit(): void {
  //   console.log(this.messageContainer);
  // }

  public userType(text: string): void {
    this.messageService.userTwoTypes(text);
  }

  addMessageOne() {
    const mesage: MessageModel = {
      messageUserOne: this.messegeOne.trimStart(),
      data: new Date(),
    };

    if (this.messegeOne !== '') {
      this.messageService.addNewMessage(mesage);
    }
    this.messegeOne = '';
    this.messageService.userTwoTypes('');
    console.log(this.messagesOne);
  }
}
