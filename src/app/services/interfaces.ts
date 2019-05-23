export interface User {
    name: string;
    phone: string;
    email: string;
    github: string;
    github_link: string;
    linkedin: string;
    education: string;
    hobbies: string[];
    profile: string;
    projects: Experience[];
    work: Experience[];
}

export interface Experience {
    title: string;
    year: string;
    subtitle: string;
    description: string[];
}
