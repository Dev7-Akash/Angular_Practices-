import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  public Hello(e: any) {
  if(e.target.id=="btnHello"){
    alert('Hello');
  }
  else if(e.target.id=="btnWelcome"){
    alert('Welcome');
  }
}}




