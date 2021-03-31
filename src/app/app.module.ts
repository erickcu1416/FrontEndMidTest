import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { OrigamiFormsModule } from '@codebakery/origami/forms';

import { AppComponent } from './app.component';
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents-fiori/dist/Bar.js";
import "@ui5/webcomponents-icons/dist/Assets.js";
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrigamiFormsModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
