import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { User } from 'src/app/services/interfaces';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'layout-header',
    styleUrls: ['./header.component.scss'],
    template: `
    <div class="header-2">
        <h1 class="title">Nick Major</h1>
        <div class="contact">
            <ul>
                <li>
                    <clr-icon shape="phone-handset"></clr-icon><span>{{user.phone}}</span>
                </li>
                <li>
                    <a href="mailto:{{user.email}}"><clr-icon shape="envelope"></clr-icon><span>{{user.email}}</span></a>
                </li>
                <li>
                    <a href="{{user.linkedin}}" target="_blank">
                        <img class="clr-icon flexible" src="assets/linkedin.png">
                        <span>linkedin</span>
                    </a>
                </li>
                <li>
                    <a href="{{user.github_link}}" target="_blank">
                        <img class="clr-icon flexible" src="assets/github.png">
                        <span>{{user.github}}</span>
                    </a>
                </li>
            </ul>
        </div>
    <div>`
})
export class HeaderComponent implements OnInit {
    user: User;

    constructor(private resume: ResumeService) { }

    ngOnInit() {
        this.user = this.resume.getResume();
    }
}
