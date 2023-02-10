import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  lang: any;
  ngOnInit(): void {
    this.lang = 'ru';
  }

  public changeLang(lang:any) {
    this.share.doClick(lang.value);
  }

  constructor(private share: LanguageService) {
    this.share.onChangeLang.subscribe(cnt => this.lang = cnt);
  }
}
