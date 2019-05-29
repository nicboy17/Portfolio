import { Injectable } from '@angular/core';
import ResumeJSON from './resume.json';
import { User } from './interfaces.js';
import EmploymentJSON from './employment.json';
import ProjectJSON from './projects.json';

@Injectable({
    providedIn: 'root'
})
export class ResumeService {
    private user: User = ResumeJSON;
    private employment = EmploymentJSON;
    private projects = ProjectJSON;

    constructor() { }

    getResume(): User {
        return this.user;
    }

    getEmployment() {
        return this.employment;
    }

    getProjects() {
        return this.projects;
    }
}
