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
import {MatButtonModule, MatGridListModule} from "@angular/material";
import {ServerSettingsComponent} from "./server-settings/server-settings.component";
import {BsDropdownModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import {EnumToArrayPipe} from "./enum-to-array.pipe";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatGridListModule,
        NgxElectronModule,
        AppRoutingModule,
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
        EnumToArrayPipe
    ],
    bootstrap: [AppComponent],
    providers: [EditorService, NavigatorService]
})
export class AppModule {
}