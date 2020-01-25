import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import 'hammerjs';
import { NgxGalleryModule } from 'ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkComponent } from './work/work.component';
import { EmploymentComponent } from './employment/employment.component';
import { TableofcontentsComponent } from './layout/tableofcontents/tableofcontents.component';
import { ExperienceComponent } from './resume/experience/experience.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidenavComponent,
        ResumeComponent,
        WorkComponent,
        EmploymentComponent,
        TableofcontentsComponent,
        ExperienceComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ClarityModule,
        NgxGalleryModule,
        RouterModule,
        BrowserAnimationsModule,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
