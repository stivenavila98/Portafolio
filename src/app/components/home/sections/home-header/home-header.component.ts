import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-home-header',
	templateUrl: './home-header.component.html',
	styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
	@Output() lenguageChanged = new EventEmitter();
	@Input() translationLenguage:any = null;

	profile = {
		name: "",
		work_position: ""
	}

	languages = {
		en: false,
		es: false
	}

	load = false;
	

	constructor(public translate: TranslateService) { }

	ngOnInit(): void {
		if(this.translate.currentLang != "es") this.languages["en"] = true;
		else this.languages["es"] = true;
	}

	ngOnChanges() {
		if(this.translationLenguage != null) {
			this.profile.work_position = this.translationLenguage.header.work_position;
			this.loadDataProfile(this.load);
			this.load = true;
		}
	}

	loadDataProfile(reload = false) {
		if(!reload) this.profile.name = "Stiven Avila";

		let copy:any = { ...this.profile };
		this.profile.name = "";
		this.profile.work_position = "";
		copy.name = copy.name.split("");
		copy.work_position = copy.work_position.split("");

		let start = () => {
			let cont = 0;
			let string_length = copy.name.length;
			let temp = true;
			let interval = setInterval(() => {
				if(temp) {
					if(cont < string_length) {
						this.profile.name += copy.name[cont];
						cont++;
					}
					else {
						temp = false;
						cont = 0;
						string_length = copy.work_position.length;
					}
				}
				else {
					if(cont < string_length) {
						this.profile.work_position += copy.work_position[cont];
						cont++;
					}
					else clearInterval(interval);
				}
			}, 30);
		}

		if(reload) start();
		else {
			setTimeout(() =>{
				start();
			}, 500);
		}
	}

	changeLanguage(language) {
		for(const key in this.languages) {
			this.languages[key] = false;
		}
		this.languages[language] = true;

		this.translate.use(language);
		this.translate.getTranslation(language).subscribe((res: any) => {
			this.profile.work_position = res.header.work_position;
			this.lenguageChanged.emit(res)
		});
	}
}
