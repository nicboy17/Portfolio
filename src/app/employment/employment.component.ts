import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ResumeService } from '../services/resume.service';

@Component({
    selector: 'app-employment',
    templateUrl: './employment.component.html',
    styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    employment = [];

    constructor(private resume: ResumeService) { }

    ngOnInit(): void {
        this.employment = this.resume.getEmployment();

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
