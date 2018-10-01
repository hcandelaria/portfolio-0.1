import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ModalComponent } from './modal/modal.component';

import { ModalService } from './_services';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '',            component: HomeComponent},
  { path: 'about',       component: AboutComponent},
  { path: 'portfolio',   component: PortfolioComponent},
  { path: 'resume',      component: ResumeComponent},
  { path: 'contact',     component: ContactComponent},
  { path: 'test',        component: ModalComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    ModalComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule
  ],
  providers: [
      ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
