type NameType = {
  common: string;
  official: string;
  nativeName: {
    por: {
      official: string
      common: string;
    }
  };
}

export type Country = {
  name: NameType;
  fullName: string;
  code: string;
  currency: string;
  capital: string[];
  region: string;
  languages: string | string[];
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  borders: string[] | null;
}