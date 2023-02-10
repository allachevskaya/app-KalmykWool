import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private clickLang:any;

  onChangeLang:EventEmitter<any> = new EventEmitter();

  public doClick(lang:any){
    this.clickLang = lang;
    this.onChangeLang.emit(this.clickLang);
  }
}
