import type { Storage } from "./Misc/Structs";
import { WatchCache } from "./Misc/Utils";

import { HandleFeaturedSection } from "./Sections/Featured";
import { HandleProjectCards } from "./Sections/Projects";
import { HandleExperienceTimeline } from "./Sections/Experience";
import { HandlePhotoMasonry } from "./Sections/Photos";

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