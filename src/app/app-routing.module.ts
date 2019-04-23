import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoverComponent} from "./cover/cover.component";
import {Error404Component} from "./error404/error404.component";

const routes: Routes = [
    {path: '', component: CoverComponent},
    {path: 'start', component: CoverComponent},
    {path: 'finish', component: CoverComponent},
    {path: 'test', component: CoverComponent},

    {path: '**', component: Error404Component}
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}