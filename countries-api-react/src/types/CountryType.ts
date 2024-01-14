type NameType = {
  common: string;
  official: string;
  nativeName: string;
}

type FlagsType = {
  png: string;
  svg: string;
}

export type Country = {
  name: NameType;
  fullName: string;
  code: string;
  currency: string;
  languages: string[]
  capital: string;
  region: string;
  population: number;
  flags: FlagsType;
}