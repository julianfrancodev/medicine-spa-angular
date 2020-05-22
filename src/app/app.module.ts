import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes

import {app_routing} from './app.routes';

// Services
import { PsicodelicsService } from './services/psicodelics.service';



// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PsicodelicsComponent } from './components/psicodelics/psicodelics.component';
import { PsicodelicComponent } from './components/psicodelic/psicodelic.component';
import { SearchComponent } from './components/search/search.component';
import { CardPsicoComponent } from './components/card-psico/card-psico.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PsicodelicsComponent,
    PsicodelicComponent,
    SearchComponent,
    CardPsicoComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [
    PsicodelicsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
