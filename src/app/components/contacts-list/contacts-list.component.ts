import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AddressBookService } from 'src/app/services/address-book.service';
import { Contact, DefaultContact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[] = [DefaultContact];

  constructor(
    private addressBookService: AddressBookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addressBookService.getContact().subscribe(
      (data) => {
        this.sortContacts(data.results);
        this.contacts = data.results;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  /*   sort contacts in ascending alphabetical order  */
  sortContacts(data: any): void {
    data.sort(function (a: Contact, b: Contact) {
      return a.name.first.localeCompare(b.name.first);
    });
  }

  getAddress(contact: Contact): string {
    let street = contact.location.street;
    return `${street.number} ${street.name}`;
  }

  navigateToDetails(contact: Contact) {
    this.router.navigate(['/details'], { state: { contact } });
  }
}
