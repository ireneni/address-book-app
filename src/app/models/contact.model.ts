export interface Contact {
  name: { first: string; last: string };
  email: string;
  cell: string;
  location: {
    city: string;
    country: string;
    postcode: string | number;
    street: { name: string; number: number };
  };
  picture: { large: string };
}

export const DefaultContact: Contact = {
  cell: '063-8165-153',
  email: 'sherlock@example.com',
  location: {
    street: { name: 'Baker St', number: 221 },
    city: 'London',
    country: 'England',
    postcode: 'NW1 6XE',
  },
  name: { first: 'Sherlock', last: 'Holmes' },
  picture: { large: 'https://randomuser.me/api/portraits/men/43.jpg' },
}
