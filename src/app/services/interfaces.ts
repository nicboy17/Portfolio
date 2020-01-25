export interface User {
    name: string;
    phone: string;
    email: string;
    github: string;
    github_link: string;
    linkedin: string;
    education: Education;
    hobbies: string[];
    skills: Skills;
    projects: Experience[];
    work: Experience[];
}

interface Education {
    school: string;
    courses: string[];
}

interface Skills {
    proficient: string[];
    knowledge: string[];
}

export interface Experience {
    title: string;
    course?: string;
    year?: string;
    link?: string;
    repo?: string;
    subtitle?: string;
    responsibilities?: {};
    description: string[];
}
