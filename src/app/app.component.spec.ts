import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';


describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [
      AppComponent,
      HeaderComponent
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'address-book-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('address-book-app');
  });

  it(`should have a header with text "address book"`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const headerElement = fixture.nativeElement.querySelector('h1');
    expect(headerElement).toBeTruthy();
    expect(headerElement.textContent).toContain('address book');
  });
});
