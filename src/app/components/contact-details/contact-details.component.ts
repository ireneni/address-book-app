import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact, DefaultContact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  /*   Created a default template to guard against type error  */
  contact: Contact = DefaultContact;

  showAddress: boolean = true;
  showContactInfo: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const state = this.route.snapshot.root.firstChild?.routeConfig?.path; // Get route state
    if (state === 'details') {
      this.contact = history.state.contact; // Access contact object from state
    } 
  }

  getFullAddress(): string {
    let location = this.contact.location;
    let street = `${location.street.number} ${location.street.name}`;
    return `${street} <br> ${location.postcode} <br> ${location.city}, ${location.country}`;
  }

  getContactInfo(): string {
    return `${this.contact.email} <br> ${this.contact.cell}`;
  }

  addressClicked(): void {
    if (this.showContactInfo) {
      this.showContactInfo = false;
      this.showAddress = true;
    }
  }

  contactClicked(): void {
    if (this.showAddress) {
      this.showAddress = false;
      this.showContactInfo = true;
    }
  }
}
