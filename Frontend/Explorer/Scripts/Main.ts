
import type { Storage } from "./Misc/Structs";

import { Log, WatchCache } from "./Misc/Utils";

import { FadeInBody } from "./Sections/Body";
import { InitiateQandA } from "./Sections/Q&A";
import { InitiateHighlightPlaceholder } from "./Sections/Highlight";

export const GlobalStorage: Storage = {

    Cache: {


    },

    States: {

    }

};

WatchCache();

FadeInBody(); // must be ran before InitiateQandA since there's an element positiong thing that occurs in there
InitiateQandA();
InitiateHighlightPlaceholder();

// Welcome the user (maybe)

Log("Info", "Welcome! If you see this, consider this a nice easter egg. Either you're technical, don't know what you're doing, or like me... both.");

// Do some telemetry

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
            Site: "Explorer (RLST 1501 Project)",

            Referrer: document.referrer,
            RequestedURL: window.location.href

        })

    });

})();