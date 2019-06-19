import {Component, Input, OnInit} from '@angular/core';
import {Experience} from '../../services/interfaces';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
    @Input() title: string;
    @Input() experiences: Experience;

    constructor() { }

    ngOnInit() {}

}
