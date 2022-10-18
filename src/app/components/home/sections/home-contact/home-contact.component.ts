import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-home-contact',
	templateUrl: './home-contact.component.html',
	styleUrls: ['./home-contact.component.css', '../../home.component.css']
})
export class HomeContactComponent implements OnInit {
	@Input() translationLenguage:any = null;

	formData:any = {
		name: "",
		email: "",
		message: ""
	}
	formDataEmpty:any = {
		name: false,
		email: false,
		message: false
	}

	nameFieldsform:any = {
		name: "",
		mail: "",
		message: ""
	}

	constructor() { }

	ngOnInit(): void {
	}

	ngOnChanges() {
		if(this.translationLenguage != null) {
			for (let key in this.nameFieldsform) {
				this.nameFieldsform[key] = this.translationLenguage.contact.form_fields[key];
				this.nameFieldsform[key] = this.translationLenguage.contact.form_fields[key];
				this.nameFieldsform[key] = this.translationLenguage.contact.form_fields[key];
			}
		}
	}

	checkFild(key:any) {
		this.formData[key] = this.formData[key].trim();

		if(key === "email") {
			let exp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

			if(this.formData[key] != "" && !exp.test(this.formData[key])) this.formDataEmpty[key] = true;
			else this.formDataEmpty[key] = false;

			if(this.formData[key] == "") this.formDataEmpty[key] = true;
		}
		else if(this.formData[key] === "") this.formDataEmpty[key] = true;
		else this.formDataEmpty[key] = false;
	}

	sendForm(e:any) {
		let is_empty = false;
		for(let key in this.formData) {
			this.formData[key] = this.formData[key].trim();

			if(key === "email") {
				let exp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

				if(this.formData[key] != "" && !exp.test(this.formData[key])) {this.formDataEmpty[key] = true; is_empty = true;}
				if(this.formData[key] == "") {this.formDataEmpty[key] = true; is_empty = true;}
			}
			else if(this.formData[key] === "") {
				is_empty = true;
				this.formDataEmpty[key] = true;
			}
		}

		if(!is_empty) e.target.submit();
	}

}
