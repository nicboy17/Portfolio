import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ResumeService } from '../services/resume.service';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    projects = [];

    constructor(private resume: ResumeService) { }

    ngOnInit() {
        this.projects = this.resume.getProjects();

        this.galleryOptions = [
            {
                breakpoint: 2000,
                image: false,
                thumbnailsRemainingCount: true,
                height: '100px',
                width: '100%',
                thumbnailsColumns: 5,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
    }

}
