import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkComponent } from './work/work.component';
import { EmploymentComponent } from './employment/employment.component';
import { RedirectGuard } from './services/redirectguard';
import ResumeJSON from './services/resume.json';

const routes: Routes = [
    { path: '', redirectTo: '/summary', pathMatch: 'full' },
    { path: 'summary', component: SummaryComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'previous-work', component: WorkComponent },
    { path: 'previous-employment', component: EmploymentComponent },
    {
        path: 'linkedin',
        canActivate: [RedirectGuard],
        component: RedirectGuard,
        data: {
            externalUrl: ResumeJSON.linkedin
        }
    },
    {
        path: 'github',
        canActivate: [RedirectGuard],
        component: RedirectGuard,
        data: {
            externalUrl: ResumeJSON.github_link
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
