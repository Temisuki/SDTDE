import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgxElectronModule} from "ngx-electron";
import {EditorService} from "./editor.service";
import {BoilerplateComponent} from "./boilerplate/boilerplate.component";
import {TestComponent} from "./test/test.component";
import {AppRoutingModule} from "./routing.module";
import {MainComponent} from "./main/main.component";
import {ItemsComponent} from "./items/items.component";
import {NavigatorService} from "./navigator.service";
import {MenuComponent} from "./menu/menu.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    MatButtonModule,
    MatGridListModule,
    MatIconModule, MatInputModule, MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from "@angular/material";
import {ServerSettingsComponent} from "./server-settings/server-settings.component";
import {BsDropdownModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import {EnumToArrayPipe} from "./utility/enum-to-array.pipe";
import {FirstLetterToUpperPipe} from "./utility/first-letter-to-upper.pipe";
import {SplitWordsFromEnumPipe} from "./utility/split-words-from-enum.pipe";
import {NavbarComponent} from "./navbar/navbar.component";
import {SearchFilterPipe} from "./utility/search-filter.pipe";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatGridListModule,
        MatInputModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        NgxElectronModule,
        AppRoutingModule,
        MatSidenavModule,
        MatListModule,
        FormsModule,
        BsDropdownModule.forRoot()
    ],
    declarations: [
        AppComponent,
        BoilerplateComponent,
        TestComponent,
        MainComponent,
        ServerSettingsComponent,
        MenuComponent,
        ItemsComponent,
        NavbarComponent,
        EnumToArrayPipe,
        FirstLetterToUpperPipe,
        SearchFilterPipe,
        SplitWordsFromEnumPipe
    ],
    bootstrap: [AppComponent],
    providers: [EditorService, NavigatorService]
})
export class AppModule {
}