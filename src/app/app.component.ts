import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'AppLimpia';

	constructor(public translate: TranslateService) {
		this.setAppLanguage();
	}

	setAppLanguage() {
		this.translate.setDefaultLang('en');
		this.translate.use(this.translate.getBrowserLang() == "es" ? 'es' : 'en');
	}
}
