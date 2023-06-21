import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TeamComponent } from './components/team/team.component';
import { MainappComponent } from './routes/mainapp/mainapp.component';
import { TasktablesComponent } from './components/mainappcomponents/tasktables/tasktables.component';
import { BarscontainerComponent } from './components/mainappcomponents/barscontainer/barscontainer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    TestimonialsComponent,
    TeamComponent,
    MainappComponent,
    TasktablesComponent,
    BarscontainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
