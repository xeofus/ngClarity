import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public translate: TranslateService,
  ){
    translate.addLangs(["en", "ru"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    if (browserLang.match( /en|ru/ )) {
      translate.use( browserLang );
    } else {
      translate.use( 'en' );
    }
  }
}
