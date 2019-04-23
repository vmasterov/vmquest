import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoverComponent} from './cover/cover.component';
import {AppRoutingModule} from './app-routing.module';
import {Error404Component} from './error404/error404.component';
import { HttpClientModule }    from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { ForTestOneComponent } from './for-test-one/for-test-one.component';
import { ForTestTwoComponent } from './for-test-two/for-test-two.component';
import { ForTestComponent } from './for-test/for-test.component';

@NgModule({
    declarations: [
        AppComponent,
        CoverComponent,
        Error404Component,
        ForTestOneComponent,
        ForTestTwoComponent,
        ForTestComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
