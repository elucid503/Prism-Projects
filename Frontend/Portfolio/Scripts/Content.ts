// Featured Section

export type FeaturedImage = { ImageURL: string, Title: string, Meta: { Date: string, Location: string } };

export const FeaturedImages: FeaturedImage[] = [

    {

        ImageURL: "https://cdn.sprout.software/Files/Sprout/Hosting/PFotos/Med/015.webp",

        Title: "Blue Blossoms",

        Meta: {

            Date: "April 2025",
            Location: "New York, NY"

        },

    },

    {

        ImageURL: "https://cdn.sprout.software/Files/Sprout/Hosting/PFotos/Med/024.webp",

        Title: "Foreground Flowers",

        Meta: {

            Date: "May 2025",
            Location: "Fairfield, CT"

        },

    },

    {

        ImageURL: "https://cdn.sprout.software/Files/Sprout/Hosting/PFotos/Med/025.webp",

        Title: "Sunlight Branches",

        Meta: {

            Date: "May 2025",
            Location: "Fairfield, CT"

        },

    },


]

export const FeaturedImageUpdateInterval = 15_000; // 15 seconds

// Project Cards

export type ProjectCard = {

    Title: string,
    Description: string,
    IconName: string

}

export const ProjectCards: ProjectCard[] = [

    {

        Title: "Synthara For Web",
        Description: "A fully-featured music app, built from the ground up.",
        IconName: "musical-notes-outline"

    },

    {

        Title: "Synthara for Discord",
        Description: "A popular, fast, and reliable music bot on the Discord chat app.",
        IconName: "musical-note-outline"

    },

    {

        Title: "Sprout",
        Description: "A startup backed by its own web services, account system and more.",
        IconName: "cloud-outline"

    },

    {

        Title: "Prism",
        Description: "A codebase for elegant web apps, built in Go and modern TypeScript.",
        IconName: "prism-outline"

    }

]

export type ExperienceTimelineNode = {

    IconName: string;

    Title: string;
    Time: string;

    Description?: string;

}

export const ExperienceTimelineNodes: ExperienceTimelineNode[] = [

    {

        IconName: `prism-outline`,

        Title: "Building New Apps",
        Time: "Fall 2024 - Current",

        Description: "Using the Prism codebase, I created a CDN and in-house Logging Relay for <a href='https://sprout.software' target='_blank'>Sprout</a>."

    },

    {

        IconName: `musical-notes-outline`,

        Title: "Created Synthara",
        Time: "Summer 2024",

        Description: "I independently developed my own music app over the course of six months."

    },

    {

        IconName: `rocket-outline`,

        Title: "Created Sprout",
        Time: "Winter 2023",

        Description: "I created Sprout and the Sprout Account system for the benefit of my future projects."

    },

    {

        IconName: `school-outline`,

        Title: "Computer Science Student",
        Time: "2023 - Current",

        Description: "I'm studying software engineering and mathematics at Fairfield University."

    },

    {

        IconName: `image-outline`,

        Title: "Performing Arts Website",
        Time: "Fall 2022",

        Description: "I created an image hosting site for my high school's Performing Arts program."

    }

]

export type MasonryPhoto = {

    Enum: string;

    URLs: {

        SmallScaled: string;

        Small: string;
        Medium: string;
        Large: string;

    }

    Title: string;

    Location: string;

}

// MasonryPhotosEnums contains an array of photos along with their enum and title.
// The enum can be used to predictably get the other URLs.

export const MasonryPhotosEnums: Partial<MasonryPhoto>[] = [

    {

        Enum: "000",
        Title: "Fall Hills",
        Location: "Fairfield, CT"

    },

    {

        Enum: "001",
        Title: "Geese",
        Location: "Fairfield, CT"


    },

    {

        Enum: "002",
        Title: "Snowfall",
        Location: "Fairfield, CT"

    },

    {

        Enum: "003",
        Title: "Barren Tree",
        Location: "Fairfield, CT"

    },

    {

        Enum: "004",
        Title: "Winter Hills",
        Location: "Fairfield, CT"

    },

    {

        Enum: "005",
        Title: "Flower & Grass",
        Location: "New York, NY"

    },

    {

        Enum: "006",
        Title: "Evening Light",
        Location: "Fairfield, CT"

    },

    {

        Enum: "007",
        Title: "Spring, Sprung",
        Location: "Fairfield, CT"

    },
    
    {

        Enum: "008",
        Title: "Full of Daffodils",
        Location: "New York, NY"

    },

    {

        Enum: "009",
        Title: "Sunset Blossoms",
        Location: "Fairfield, CT"

    },

    {

        Enum: "010",
        Title: "Parking Lot Sunset",
        Location: "Fairfield, CT"

    },

    {

        Enum: "012",
        Title: "Rainbow Refraction",
        Location: "Fairfield, CT"

    },

    {

        Enum: "013",
        Title: "Turkey",
        Location: "Fairfield, CT"

    },

    {  
            
        Enum: "022", // out of order for a reason...
        Title: "Barnyard",
        Location: "Fairfield, CT"

    },

    {

        Enum: "014",
        Title: "Spring Light",
        Location: "Fairfield, CT"

    },

    {  

        Enum: "015",
        Title: "Blue Blossoms",
        Location: "New York, NY"

    },

    {  

        Enum: "016",
        Title: "Disc Golf",
        Location: "Fairfield, CT"

    },

    {  

        Enum: "017",
        Title: "Flying Out of Focus",
        Location: "Fairfield, CT"

    },

    {  

        Enum: "018",
        Title: "Conversing",
        Location: "Fairfield, CT"

    },

    {  

        Enum: "019",
        Title: "Autumn Leaves",
        Location: "Fairfield, CT"

    },

    {  

        Enum: "020",
        Title: "Autumn Tree",
        Location: "Fairfield, CT"

    },

    {  

        Enum: "021",
        Title: "Red and Yellow",
        Location: "Fairfield, CT"

    },

    {  

        Enum: "023", // added later
        Title: "Reflections",
        Location: "Fairfield, CT"

    },

    {

        Enum: "011", // this one looks better last.
        Title: "Sunset Hills",
        Location: "Fairfield, CT"

    },


]

export const MasonryPhotos: MasonryPhoto[] = MasonryPhotosEnums.map(Photo => ({

    Enum: Photo.Enum!, // we know it exists

    URLs: {

        SmallScaled: `https://cdn.sprout.software/Files/Sprout/Hosting/PFotos/Small/${Photo.Enum}_scaled.webp`,

        Small: `https://cdn.sprout.software/Files/Sprout/Hosting/PFotos/Small/${Photo.Enum}.webp`,
        Medium: `https://cdn.sprout.software/Files/Sprout/Hosting/PFotos/Med/${Photo.Enum}.webp`,
        Large: `https://cdn.sprout.software/Files/Sprout/Hosting/PFotos/Large/${Photo.Enum}.webp`

    },

    Title: Photo.Title!, // same thing

    Location: Photo.Location! // also same thing...

}));

// Footer Links

export type FooterLink = {
    
    Title: string;
    IconName: string;
    URL: string;

}

export const FooterLinks: FooterLink[] = [

    {
        Title: "Personal Email",
        IconName: "mail",
        
        URL: "mailto:me@paulujlaky.com"

    },

    {

        Title: "Business Email",
        IconName: "mail",

        URL: "mailto:paul@sprout.software"

    },

    {

        Title: "LinkedIn",
        IconName: "logo-linkedin",

        URL: "https://www.linkedin.com/in/paul-ujlaky-402955228/"

    },

    {

        Title: "GitHub",
        IconName: "logo-github",

        URL: "https://github.com/elucid503"

    }

]
