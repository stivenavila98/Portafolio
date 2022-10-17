import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeHeaderComponent } from './components/home/sections/home-header/home-header.component';
import { HomeServicesComponent } from './components/home/sections/home-services/home-services.component';
import { HomeWorksComponent } from './components/home/sections/home-works/home-works.component';
import { HomeContactComponent } from './components/home/sections/home-contact/home-contact.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
	return new TranslateHttpLoader(httpClient);
  }

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HomeHeaderComponent,
		HomeServicesComponent,
		HomeWorksComponent,
		HomeContactComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		TranslateModule.forRoot({
		loader: {
			provide: TranslateLoader,
			useFactory: HttpLoaderFactory,
			deps: [HttpClient]
		}
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
