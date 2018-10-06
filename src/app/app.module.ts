import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatCardModule 
} from '@angular/material';

import { HomePageComponent } from './home-page/home-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';

const appRoutes: Routes = [
  { path: '',       component: HomePageComponent },
  { path: 'about',  component: AboutPageComponent },
  { path: 'skills',  component: SkillsPageComponent },
  { path: 'portfolio',  component: PortfolioPageComponent },
  { path: 'resume', component: ResumePageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ResumePageComponent,
    AboutPageComponent,
    PortfolioPageComponent,
    ProjectDialogComponent,
    FooterComponent,
    SkillsPageComponent
  ],
  entryComponents: [
    ProjectDialogComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
