import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssortmentComponent } from './pages/assortment/assortment.component';
import { AssortmentDetailedComponent } from './pages/assortment-detailed/assortment-detailed.component';
import { MainComponent } from './pages/main/main.component';
import { NewsComponent } from './pages/news/news.component';
import { StaffComponent } from './pages/staff/staff.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GeneralService } from './services/general/general.service';
import { LanguageService } from './services/language/language.service';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { CompanyComponent } from './components/company/company.component';
import { ProcessComponent } from './components/process/process.component';
import { FormComponent } from './components/form/form.component';




export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AssortmentComponent,
    AssortmentDetailedComponent,
    MainComponent,
    NewsComponent,
    StaffComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CompanyComponent,
    ProcessComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [GeneralService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
