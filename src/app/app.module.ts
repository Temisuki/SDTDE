import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgxElectronModule} from "ngx-electron";
import {EditorService} from "./editor.service";
import {BoilerplateComponent} from "./boilerplate/boilerplate.component";

@NgModule({
    imports: [
        BrowserModule,
        NgxElectronModule
    ],
    declarations: [
        AppComponent,
        BoilerplateComponent
    ],
    bootstrap: [AppComponent],
    providers: [EditorService]
})
export class AppModule {
}