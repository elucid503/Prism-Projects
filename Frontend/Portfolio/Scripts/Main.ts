import type { Storage } from "./Misc/Structs";
import { WatchCache } from "./Misc/Utils";

import { HandleFeaturedSection } from "./Sections/Featured";
import { HandleProjectCards } from "./Sections/Projects";

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