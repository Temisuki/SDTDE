import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgxElectronModule} from "ngx-electron";
import {EditorService} from "./editor.service";

@NgModule({
    imports: [
        BrowserModule,
        NgxElectronModule
    ],
    declarations: [
        AppComponent,

    ],
    bootstrap: [AppComponent],
    providers: [EditorService]
})
export class AppModule {
}