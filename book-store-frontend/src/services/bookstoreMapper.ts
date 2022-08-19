import {Bookstore} from "../models/Bookstore";
import {ApiResponse} from "../models/ApiResponse";
import {Country} from "../models/Country";
import {Book} from "../models/Book";
import {Author} from "../models/Author";

export const mapResponse = (data:ApiResponse): Bookstore[] => {
  data.data.forEach((store: Bookstore) => {
    store.relationships.countries.data.code = (data.included.find(country =>
      country.type === "countries" && country.id === store.relationships.countries.data.id
    ) as Country).attributes.code;

    store.relationships.books?.data.forEach((book) => {
      book.book = data.included.find(entity =>
        entity.type === "books" && entity.id === book.id
      ) as Book;
      book.book.relationships.author.data.fullName = (data.included.find(author =>
        author.type === "authors" && author.id === book.book?.relationships.author.data.id
      ) as Author).attributes.fullName;
    })
  })
  return data.data;
}