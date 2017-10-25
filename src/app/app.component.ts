import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public translate: TranslateService){}

  ngOnInit(){
    this.translate.addLangs(["en", "ru"]);
    this.translate.setDefaultLang('en');

    let browserLang = this.translate.getBrowserLang();
    if (browserLang.match( /en|ru/ )) {
      this.translate.use( browserLang );
    } else {
      this.translate.use( 'en' );
    }
  }
}
