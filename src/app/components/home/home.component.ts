import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	translationLenguage:any = null;

	constructor(public translate: TranslateService) {
		translate.getTranslation(translate.currentLang).subscribe((res: any) => {
			this.translationLenguage = res;
		});
	}

	ngOnInit(): void {

	}


	lenguageChanged(lenguage:object){
		this.translationLenguage = lenguage;
	}
}
