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

// Telemetry

(async () => { 

    const IP = await fetch("https://api.ipify.org?format=json").then(response => response.json()).then(data => data.ip).catch(error => null);

    if (!IP) return;

    fetch("https://sprout.software/Report", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            IP: IP,
            Page: "Main Page",
            Site: "Portfolio Site",

            Referrer: document.referrer,
            RequestedURL: window.location.href

        })

    });

})();