import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleMenu: boolean | undefined;
  lang?: any;

  constructor(private share: LanguageService,private translate: TranslateService ) {
    this.share.onChangeLang.subscribe(lan => this.lang = lan);
    translate.setDefaultLang('ru');
  }
  

  ngOnInit(): void {
    toggleMenu: false;
    this.lang = 'ru';
   
  }

  public changeLang(lang: any) {
    this.share.doClick(lang.value);
    this.translate.use(lang.value);
  }

  openMenu() {
    this.toggleMenu = !this.toggleMenu
  }

}
