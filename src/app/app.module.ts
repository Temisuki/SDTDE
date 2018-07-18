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
import {MatButtonModule} from "@angular/material";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        NgxElectronModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        BoilerplateComponent,
        TestComponent,
        MainComponent,
        MenuComponent,
        ItemsComponent,
    ],
    bootstrap: [AppComponent],
    providers: [EditorService, NavigatorService]
})
export class AppModule {
}