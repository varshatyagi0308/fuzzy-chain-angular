import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './user/user.reducer';
import { UserEffects } from './user/user.effects';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app-routing.module.ts';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DetailsComponent

  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ user: userReducer }),
    EffectsModule.forRoot([UserEffects]),
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
