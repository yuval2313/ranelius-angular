import { Language } from './enums/language.enum';

export class Category {
  name: string;
  id: number;
  updated_at: Date;
  originLang: Language;
  destLang: Language;
  words: Map<string, string>;

  constructor(
    name: string,
    id: number,
    updated_at: Date,
    originLang: Language,
    destLang: Language,
    words: Map<string, string>
  ) {
    this.name = name;
    this.id = id;
    this.updated_at = updated_at;
    this.originLang = originLang;
    this.destLang = destLang;
    this.words = words;
  }
}
