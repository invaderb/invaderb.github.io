import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public toggleMenu() {
    this.toggle.emit(true);
  }

}
