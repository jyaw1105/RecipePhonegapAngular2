import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {DropdownModule} from "ngx-dropdown";
import { DialogComponent } from './app/dialog.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppComponent} from './app/app/app.component';
import {HomeComponent} from './app/home/home.component';
import {AddComponent} from './app/add/add.component';
import {EditComponent} from './app/edit/edit.component';
import {DetailComponent} from './app/detail/detail.component';
import {Router} from './app.route';
import { RecipeService } from './app/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent,
    AddComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Router,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
