import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact = {
    cell: '063-8165-153',
    email: 'stanimir.andelkovic@example.com',
    location: {
      street: { name: 'Milene Čupić', number: 5323 },
      city: 'Arilje',
      country: 'Serbia',
      postcode: 26051,
    },
    name: { first: 'Stanimir', last: 'Anđelković' },
    picture: { large: 'https://randomuser.me/api/portraits/men/43.jpg' },
  };

  detailsRetrieved: boolean = false;
  showAddress: boolean = true;
  showContactInfo: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const state = this.route.snapshot.root.firstChild?.routeConfig?.path; // Get route state
    if (state === 'details') {
      this.contact = history.state.contact; // Access person object from state
      this.detailsRetrieved = true;
    } else {
      this.detailsRetrieved = false;
    }
  }

  getFullAddress(): string {
    let location = this.contact.location;
    let street = `${location.street.number} ${location.street.name}`;
    console.log(street);
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
