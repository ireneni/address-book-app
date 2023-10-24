import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactDetailsComponent } from './contact-details.component';
import { DefaultContact } from 'src/app/models/contact.model';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ContactDetailsComponent],
    });
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create contact details component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a profile photo', () => {
    const imgElement = fixture.nativeElement.querySelector('.profile-photo');
    expect(imgElement).toBeTruthy();
  });

  it('should contain an h1 header with contact name', () => {
    const headerElement = fixture.nativeElement.querySelector('h1');
    expect(headerElement).toBeTruthy();
    expect(headerElement.textContent).toContain(DefaultContact.name.first);
  });

  it('should contain Address and Contact display options', () => {
    const displayOptionsElement =
      fixture.nativeElement.querySelector('.display-options');
    expect(displayOptionsElement).toBeTruthy();
    expect(displayOptionsElement.textContent).toContain('Address');
    expect(displayOptionsElement.textContent).toContain('Contact');
  });
});
