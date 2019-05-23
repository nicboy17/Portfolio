import { Injectable } from '@angular/core';
import ResumeJSON from './resume.json';
import { User } from './interfaces.js';

@Injectable({
    providedIn: 'root'
})
export class ResumeService {
    private user: User = ResumeJSON;

    constructor() { }

    getResume(): User {
        return this.user;
    }

}
