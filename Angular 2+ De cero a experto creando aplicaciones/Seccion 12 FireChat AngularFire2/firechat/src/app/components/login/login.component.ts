import { Component, OnInit } from '@angular/core';

import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _chatService: ChatService) { }

  ngOnInit() {
  }

  ingresar(proveedor: string) {
    console.log(proveedor);
    this._chatService.login(proveedor);
  }
}
