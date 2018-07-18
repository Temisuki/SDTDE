import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgxElectronModule} from "ngx-electron";
import {EditorService} from "./editor.service";
import {BoilerplateComponent} from "./boilerplate/boilerplate.component";
import {TestComponent} from "./test/test.component";
import {AppRoutingModule} from "./routing.module";

@NgModule({
    imports: [
        BrowserModule,
        NgxElectronModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        BoilerplateComponent,
        TestComponent
    ],
    bootstrap: [AppComponent],
    providers: [EditorService]
})
export class AppModule {
}