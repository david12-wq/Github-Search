import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';
import{HttpClientModule} from '@angular/common/http';
import { GitSearchComponent } from './git-search/git-search.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProfileComponent,
    DateCountPipe,
    HighlightDirective,
    GitSearchComponent,
    DateAgoPipe,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
