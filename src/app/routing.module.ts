import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoilerplateComponent} from "./boilerplate/boilerplate.component";
import {TestComponent} from "./test/test.component";
import {ItemsComponent} from "./items/items.component";
import {MenuComponent} from "./menu/menu.component";


const routes: Routes = [
    {path: '', redirectTo: '/app', pathMatch: 'full'},
    {path: 'app', component: MenuComponent},
    {path: 'test', component: TestComponent},
    {path: 'items', component: ItemsComponent},
    {path: 'menu', component: MenuComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }