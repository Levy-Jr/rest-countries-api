export type NativeNameType = {
  [key: string]: {
    common: string;
  }
}

export type CurrenciesType = {
  [key: string]: {
    name: string;
  }
}

export type Country = {
  flags: {
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: NativeNameType;
  };
  population: number;
  code: string;
  cca3: string;
  currencies: CurrenciesType;
  capital: string[] | null;
  tld: string[]
  region: string;
  subregion: string;
  languages: string[];
  borders: string[] | null;
}