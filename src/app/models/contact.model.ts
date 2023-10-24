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
