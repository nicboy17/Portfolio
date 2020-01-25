import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { WorkComponent } from './work/work.component';
import { EmploymentComponent } from './employment/employment.component';

const routes: Routes = [
    { path: '', redirectTo: '/resume', pathMatch: 'full' },
    { path: 'resume', component: ResumeComponent },
    { path: 'previous-work', component: WorkComponent },
    { path: 'previous-employment', component: EmploymentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
