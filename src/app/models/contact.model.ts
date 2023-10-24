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
  email: 'stanimir.andelkovic@example.com',
  location: {
    street: { name: 'Milene Čupić', number: 5323 },
    city: 'Arilje',
    country: 'Serbia',
    postcode: 26051,
  },
  name: { first: 'Stanimir', last: 'Anđelković' },
  picture: { large: 'https://randomuser.me/api/portraits/men/43.jpg' },
}
