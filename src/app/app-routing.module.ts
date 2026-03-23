import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupFieldComponent } from './pages/popup-field/popup-field.component';
import { PasswordCheckingComponent } from './pages/password-checking/password-checking.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HighlightTextComponent } from './pages/highlight-text/highlight-text.component';
import { SearchListComponent } from './pages/search-list/search-list.component';

const routes: Routes = [
  // {path:'', component:PopupFieldComponent}
  // {path:'', component:PasswordCheckingComponent}
  // { path: '', component: LoginPageComponent },
  // { path: 'list', component: ListPageComponent },
  // { path: '', component: HighlightTextComponent },
  { path: '', component: SearchListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
