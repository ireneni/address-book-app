import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsListComponent } from './contacts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddressBookService } from 'src/app/services/address-book.service';

describe('ContactsListComponent', () => {
  let component: ContactsListComponent;
  let fixture: ComponentFixture<ContactsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsListComponent],
      imports: [HttpClientModule],
      providers: [AddressBookService],
    });

    fixture = TestBed.createComponent(ContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create contacts list component', () => {
    expect(component).toBeTruthy();
  });
  it('should contain an unordered list with 1 default contact', () => {
    const ulElement = fixture.nativeElement.querySelector('.contacts-list');
    expect(ulElement).toBeTruthy();

    const liElement = ulElement.querySelectorAll('.contact-row');
    expect(liElement.length).toBe(1);
  });
  it('contact row should contain a name and address', () => {
    const liElement = fixture.nativeElement.querySelector('.contact-row');
    expect(liElement).toBeTruthy();

    const nameSpan = liElement.querySelector('.name');
    const addressSpan = liElement.querySelector('.address');

    expect(nameSpan).toBeTruthy();
    expect(addressSpan).toBeTruthy();
  });
});
