import { TestBed } from '@angular/core/testing';
import { AddressBookService } from './address-book.service';
import { HttpClientModule } from '@angular/common/http';
import { Contact, DefaultContact } from 'src/app/models/contact.model';
import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;
import { of } from 'rxjs';

describe('AddressBookService', () => {
  let service: AddressBookService;
  let addressBookServiceSpy: SpyObj<AddressBookService>;
  const mockContact: Contact[] = [DefaultContact];

  beforeEach(() => {
    addressBookServiceSpy = createSpyObj('AddressBookService', ['getContact']);
    addressBookServiceSpy.getContact.and.returnValue(of(mockContact));
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: AddressBookService,
          useValue: addressBookServiceSpy,
        },
      ],
    });
    service = TestBed.inject(AddressBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve contact list', (done) => {
    service.getContact().subscribe((contactList) => {
      expect(contactList).toEqual(mockContact);
      done();
    }, done.fail);
  });
});
