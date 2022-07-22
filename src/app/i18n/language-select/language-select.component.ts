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
    //translate.addLangs(['english', 'français']);

    if (localStorage.getItem('language')) {
      translate.use(localStorage["language"]);
      this.fillLangs();
    } else {
      localStorage.setItem('language', 'english');
      translate.addLangs(['english', 'français']);
      translate.use('english');
    }
  }

  setTransLanguage(){
    this.translate.use(this.selectLang);
  }

  getTransLanguage(){
  this.TransLang=[...this.translate.getLangs()];
  }

  fillLangs() {
    if (localStorage.getItem('language') === 'english') {
      this.translate.addLangs(['english', 'français']);
    } else {
      this.translate.addLangs(['français', 'english']);
    }
  }

  ngOnInit(): void {
    this.getTransLanguage();
  }

  changeLang(language: string) {
    localStorage.setItem('language', language);
    this.translate.use(language);
  }

}
