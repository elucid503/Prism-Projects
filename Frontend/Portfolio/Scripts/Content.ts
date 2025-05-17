// Featured Section

import type { ExperienceTimelineNode } from "./Sections/Experience";

export type FeaturedImage = { ImageURL: string, Title: string, Meta: { Date: string, Location: string } };

export const FeaturedImages: FeaturedImage[] = [

    {

        ImageURL: "https://cdn.sprout.software/Files/paul/Photos/NY-4-20/cherry1.JPG",

        Title: "Cherry Blossoms",

        Meta: {

            Date: "April 2025",
            Location: "New York, NY"

        },

    },

    {

        ImageURL: "https://cdn.sprout.software/Files/paul/Photos/NY-4-20/apple1.JPG",

        Title: "Apple Tree",

        Meta: {

            Date: "April 2025",
            Location: "New York, NY"

        },

    },

    {

        ImageURL: "https://cdn.sprout.software/Files/paul/Photos/FF-4-28/fountain_near.JPG",

        Title: "Rainbow",

        Meta: {

            Date: "April 2025",
            Location: "Fairfield CT"

        },

    },

    {

        ImageURL: "https://cdn.sprout.software/Files/paul/Photos/FF-4-28/turkey.JPG",

        Title: "Turkey",

        Meta: {

            Date: "April 2025",
            Location: "Fairfield CT"

        },

    },


]

export const FeaturedImageUpdateInterval = 10_000; // 10 seconds

// Project Cards

export type ProjectCard = {

    Title: string,
    Description: string,
    IconName: string

}

export const ProjectCards: ProjectCard[] = [

    {

        Title: "Project Title 1",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        IconName: "musical-notes-outline"

    },

    {

        Title: "Project Title 2",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        IconName: "globe-outline"

    },

    {

        Title: "Project Title 3",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        IconName: "document-outline"

    },

    {

        Title: "Project Title 4",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        IconName: "albums-outline"

    }

]

export const ExperienceTimelineNodes: ExperienceTimelineNode[] = [

    {

        IconName: `laptop-outline`,

        Title: "Software Engineer",
        Time: "2023 - Present",

        Description: "Working on various projects using modern web technologies."

    },

    {

        IconName: `school-outline`,

        Title: "Computer Science Student",
        Time: "2020 - 2023",

        Description: "Studied computer science with a focus on software development."

    },

    {

        IconName: `briefcase-outline`,

        Title: "Internship at Tech Company",
        Time: "Summer 2022",

        Description: "Gained practical experience in software development and teamwork."

    }

]