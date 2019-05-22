import { Component, OnInit } from '@angular/core';
import { template } from '@angular/core/src/render3';

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
                    <clr-icon shape="phone-handset"></clr-icon> <span> {{phoneNumber}}</span>
                </li>
                <li>
                    <clr-icon shape="envelope"></clr-icon> <span> {{email}}</span>
                </li>
                <li>
                    <img class="clr-icon flexible" src="assets/linkedin.png"> <span> linkedin </span>
                </li>
                <li>
                    <img class="clr-icon flexible" src="assets/github.png"><span> {{github}}</span>
                </li>
            </ul>
        </div>
    <div>`
})
export class HeaderComponent implements OnInit {
    phoneNumber = '(519)535-0630';
    email = 'nickmajor78@gmail.com';
    github = 'nicboy17';

    constructor() { }

    ngOnInit() {
    }

}
