import {Bookstore} from "../models/Bookstore";
import {mapResponse} from "./bookstoreMapper";

const API_URL = "http://localhost:3001/"

const getBookstores = async (): Promise<Bookstore[]> => {
  const response = await fetch(`${API_URL}stores`);
  const data = await response.json();
  return mapResponse(data);
}

const getFlagSrc = async (code: string): Promise<string> => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const data = await response.json();
  return data[0].flags.svg;
}

export {getBookstores, getFlagSrc}