import { Locale } from "./sap.common";

export interface IListOfBooks {
  createdAt?: Date;
  modifiedAt?: Date;
  ID: number;
  title: string;
  author: string;
  genre?: IGenres;
  genre_ID?: number;
  stock: number;
  price: number;
  currency: ICurrencies;
  currency_code?: string;
  image: Buffer;
  texts?: IBooksTexts[];
  localized?: IBooksTexts;
}

export interface IBooks {
  createdAt?: Date;
  modifiedAt?: Date;
  ID: number;
  title: string;
  descr: string;
  author: string;
  genre?: IGenres;
  genre_ID?: number;
  stock: number;
  price: number;
  currency: ICurrencies;
  currency_code?: string;
  image: Buffer;
  texts?: IBooksTexts[];
  localized?: IBooksTexts;
}

export interface IGenres {
  name: string;
  descr: string;
  ID: number;
  parent?: IGenres;
  parent_ID?: number;
  children: IGenres[];
  texts?: IGenresTexts[];
  localized?: IGenresTexts;
}

export interface ICurrencies {
  name: string;
  descr: string;
  code: string;
  symbol: string;
  texts?: ICurrenciesTexts[];
  localized?: ICurrenciesTexts;
}

export interface IBooksTexts {
  locale: Locale;
  ID: number;
  title: string;
  descr: string;
}

export interface IGenresTexts {
  locale: Locale;
  name: string;
  descr: string;
  ID: number;
}

export interface ICurrenciesTexts {
  locale: Locale;
  name: string;
  descr: string;
  code: string;
}

export enum ActionSubmitOrder {
  name = "submitOrder",
  paramBook = "book",
  paramQuantity = "quantity",
}

export interface IActionSubmitOrderParams {
  book: number;
  quantity: number;
}

export type ActionSubmitOrderReturn = unknown;

export enum Entity {
  ListOfBooks = "CatalogService.ListOfBooks",
  Books = "CatalogService.Books",
  Genres = "CatalogService.Genres",
  Currencies = "CatalogService.Currencies",
  BooksTexts = "CatalogService.Books.texts",
  GenresTexts = "CatalogService.Genres.texts",
  CurrenciesTexts = "CatalogService.Currencies.texts",
}

export enum SanitizedEntity {
  ListOfBooks = "ListOfBooks",
  Books = "Books",
  Genres = "Genres",
  Currencies = "Currencies",
  BooksTexts = "BooksTexts",
  GenresTexts = "GenresTexts",
  CurrenciesTexts = "CurrenciesTexts",
}
