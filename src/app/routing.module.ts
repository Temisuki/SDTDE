import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from "./test/test.component";
import {ItemsComponent} from "./items/items.component";
import {MenuComponent} from "./menu/menu.component";
import {ServerSettingsComponent} from "./server-settings/server-settings.component";


const routes: Routes = [
    {path: '', redirectTo: '/app', pathMatch: 'full'},
    {path: 'app', component: MenuComponent},
    {path: 'test', component: TestComponent},
    {path: 'items', component: ItemsComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'server', component: ServerSettingsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }