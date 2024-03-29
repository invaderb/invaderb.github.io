import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
	let component: ContactComponent;
	let fixture: ComponentFixture<ContactComponent>;

	beforeEach(async() => {
		TestBed.configureTestingModule({
			declarations: [ContactComponent],
			imports: [FlexLayoutModule]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ContactComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
