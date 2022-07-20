import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent implements OnInit {

  selectLang:string="english";
  TransLang=[];

  constructor(public translate: TranslateService) {
    //translate.setDefaultLang('english');
    translate.addLangs(['english', 'français']);
    //translate.use('english');

    if (localStorage.getItem('locale')) {
      const browserLang = localStorage.getItem('locale');
      translate.use(browserLang.match(/english|français/) ? browserLang : 'english');
     } else {
     localStorage.setItem('locale', 'english');
     translate.setDefaultLang('english');
    }
  }

  setTransLanguage(){
    this.translate.use(this.selectLang);
  }

  getTransLanguage(){
  this.TransLang=[...this.translate.getLangs()];
  }

  ngOnInit(): void {
    this.getTransLanguage();
  }

  changeLang(language: string) {
    localStorage.setItem('language', language);
    this.translate.use(language);
  }

}
