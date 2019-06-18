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
    links: any;

    constructor(private resume: ResumeService) { }

    ngOnInit() {
        this.user = this.resume.getResume();
        this.links = [
            {title: 'Profile'},
            {title: 'Education'},
            {title: 'Projects', data: this.user.projects},
            {title: 'Work Experience', data: this.user.work},
            {title: 'Hobbies' }
        ];
    }

}
