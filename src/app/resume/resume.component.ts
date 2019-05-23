import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { User } from '../services/interfaces';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
    user: User;

    constructor(private resume: ResumeService) { }

    ngOnInit() {
        this.user = this.resume.getResume();
    }

}
