import {Bookstore} from "./Bookstore";
import {Author} from "./Author";
import {Country} from "./Country";
import {Book} from "./Book";

export interface ApiResponse {
  data: Bookstore[]
  included: (Author|Book|Country)[]
}