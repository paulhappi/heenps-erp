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
    translate.setDefaultLang('english');
    translate.addLangs(['english', 'français']);
    translate.use('english');
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

}
