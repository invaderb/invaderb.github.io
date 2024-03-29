import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
	@Output() toggle = new EventEmitter();
	constructor() {}

	public toggleMenu() {
		this.toggle.emit(true);
	}
}
