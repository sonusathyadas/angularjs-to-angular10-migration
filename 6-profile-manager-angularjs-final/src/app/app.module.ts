import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { ToasterModule } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CardComponent } from './components/card.component';
import { PersonCreateComponent } from './components/person-create.component';
import { PersonEditComponent } from './components/person-edit.component';
import { PersonListComponent } from './components/person-list.component';
import { SearchComponent } from './components/search.component';
import { SpinnerComponent } from './components/spinner.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
//import { ToasterServiceProvider, UIRouterStateParamsProvider, UIRouterStateProvider } from './upgraded-providers';
import { AppComponent } from './components/app.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
    declarations:[
        AppComponent,
        SearchComponent,
        DefaultImagePipe,
        CardComponent,
        SpinnerComponent,
        PersonListComponent,
        PersonCreateComponent,
        PersonEditComponent
    ],
    imports: [
        BrowserModule,
        UpgradeModule,
        HttpClientModule,
        ReactiveFormsModule,
        InfiniteScrollModule,
        FormsModule,
        BrowserAnimationsModule,
        ToasterModule.forRoot(),
        AppRoutingModule
    ],
    providers: [
        // ToasterServiceProvider,
        // UIRouterStateProvider,
        // UIRouterStateParamsProvider
    ],
    // entryComponents:[
    //     SearchComponent,
    //     CardComponent,
    //     SpinnerComponent,
    //     PersonListComponent,
    //     PersonCreateComponent,
    //     PersonEditComponent
    // ],
    bootstrap:[AppComponent]
})
export class AppModule {
    // ngDoBootstrap() {

    // }
}