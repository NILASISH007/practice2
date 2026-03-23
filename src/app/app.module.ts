import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordCheckingComponent } from './pages/password-checking/password-checking.component';
import { PopupFieldComponent } from './pages/popup-field/popup-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HighlightTextComponent } from './pages/highlight-text/highlight-text.component';
import { HighlightsDirective } from './directive/highlights.directive';
import { SearchListComponent } from './pages/search-list/search-list.component';

@NgModule({
  declarations: [AppComponent, PasswordCheckingComponent, PopupFieldComponent, LoginPageComponent, ListPageComponent, HighlightTextComponent, HighlightsDirective, SearchListComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
