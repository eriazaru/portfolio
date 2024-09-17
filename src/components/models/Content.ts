export interface Data {
    certificates: Certificate[];
    technology:   Technology[];
    links:        Link[];
    projects:     Projects[];
    experience:   Experience[];
    education:    Education[];
}

export interface Certificate {
    src:         string;
    name:        string;
    type:        string;
    group:       string;
    description: string;
}
 
export interface Link {
    label: string;
    href:  string;
    id:    string;
}

export interface Technology {
    name: string;
    src:  string;
}


export interface Projects {
    title: string;
    stack: Technology[];
    type: string[];
    description: string;
    link?: string;
    github?: string;
}

export interface Experience {
    company: string;
    role: string;
    type: "Contract" | "Part-time" | "Freelance" | "Internship" | "Full-time";
    duration: string;
    description?: string[];

}

export interface Education {
    school: string;
    program: string;
    duration: string;
    honor?: string;
}