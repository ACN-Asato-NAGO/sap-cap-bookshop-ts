import { ICurrencies, Locale } from "./sap.common";

export interface IBooks {
  createdAt?: Date;
  createdBy?: string;
  modifiedAt?: Date;
  modifiedBy?: string;
  ID: number;
  title: string;
  descr: string;
  author?: IAuthors;
  author_ID?: number;
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

export interface IAuthors {
  createdAt?: Date;
  createdBy?: string;
  modifiedAt?: Date;
  modifiedBy?: string;
  ID: number;
  name: string;
  dateOfBirth: Date;
  dateOfDeath: Date;
  placeOfBirth: string;
  placeOfDeath: string;
  books?: IBooks[];
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

export enum Entity {
  Books = "sap.capire.bookshop.Books",
  Authors = "sap.capire.bookshop.Authors",
  Genres = "sap.capire.bookshop.Genres",
  BooksTexts = "sap.capire.bookshop.Books.texts",
  GenresTexts = "sap.capire.bookshop.Genres.texts",
}

export enum SanitizedEntity {
  Books = "Books",
  Authors = "Authors",
  Genres = "Genres",
  BooksTexts = "BooksTexts",
  GenresTexts = "GenresTexts",
}
