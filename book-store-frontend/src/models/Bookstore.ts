import {Book} from "./Book";

export interface Bookstore {
  attributes: {
    name: string;
    website: string;
    rating: number;
    storeImage: string;
    establishmentDate: string;
  },
  relationships: {
    countries: {
      data: {
        id: string;
        code?: string;
      }
    },
    books?: {
      data: {
        id: string;
        book?: Book;
      }[]
    }
  }
}