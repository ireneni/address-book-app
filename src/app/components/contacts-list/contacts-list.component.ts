import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AddressBookService } from 'src/app/services/address-book.service';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private addressBookService: AddressBookService, private router: Router) { }

  ngOnInit(): void {
    this.addressBookService.getContact().subscribe(
      data => {
        this.contacts = data.results;
        console.log(this.contacts);
      },
      error => {
        console.error(error); // Log errors to the console
      }
    );
  }

  getAddress(contact: Contact): string {
    let street = contact.location.street;
    return `${street.number} ${street.name}`;
  }

  navigateToDetails(contact: Contact) {
    this.router.navigate(['/details'], { state: { contact } });
  }

}
