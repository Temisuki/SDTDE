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
    MatButtonModule, MatChipsModule, MatFormFieldModule,
    MatGridListModule,
    MatIconModule, MatInputModule, MatListModule,
    MatMenuModule,
    MatSidenavModule, MatSnackBarModule,
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
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NewsService} from "./news.service";
import {HttpClientModule} from "@angular/common/http";

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
        MatSnackBarModule,
        MatFormFieldModule,
        MatChipsModule,
        NgbModule.forRoot(),
        MatListModule,
        FormsModule,
        BsDropdownModule.forRoot(),
        HttpClientModule
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
    providers: [EditorService, NavigatorService, NewsService]
})
export class AppModule {
}