// Project: Portfolio

import type { Storage } from "./Misc/Structs";

// Misc Functions

import { WatchCache } from "./Misc/Utils";

// Section Files

import { HandleFeaturedSection } from "./Sections/Featured";
import { HandleProjectCards } from "./Sections/Projects";
import { HandleExperienceTimeline } from "./Sections/Experience";
import { HandlePhotoMasonry } from "./Sections/Photos";
import { HandleFooterLinks } from "./Sections/Footer";

export const GlobalStorage: Storage = {

    Cache: {


    },

    States: {

    }

};

WatchCache();

// Sections/Components

HandleFeaturedSection();
HandleProjectCards();
HandleExperienceTimeline();
HandlePhotoMasonry();
HandleFooterLinks();