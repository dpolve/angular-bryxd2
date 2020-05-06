import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { RegioniComponent } from './regioni/regioni.component';
import { ProvinceComponent } from './province/province.component';
import { RegioniService } from './regioni.service';
import { ProvinceService } from './province.service';
import { RegioniListComponent } from './regioni-list/regioni-list.component';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule,NgbModule ],
  declarations: [ AppComponent, RegioniComponent, ProvinceComponent, RegioniListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [RegioniService, ProvinceService]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
library.addIconPacks(fas, far);
}
 }
