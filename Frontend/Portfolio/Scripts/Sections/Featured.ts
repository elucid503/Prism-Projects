import $ from "jquery";

import { FeaturedImages, FeaturedImageUpdateInterval, type FeaturedImage } from "../Content";

import { AnimationTimes } from "../Misc/Structs";

const RelevantElements = {

    Container: $(".FeaturedImageContainer"),
    Backdrop: $(".FeaturedImageBackdrop"),

    Meta: {

        Date: $(".FeaturedImageInfo").find(".FeaturedImageMetaItem.DateText"),
        Location: $(".FeaturedImageInfo").find(".FeaturedImageMetaItem.LocationText"),

        Title: $(".FeaturedImageInfo").find(".FeaturedImageInfoTitle")
        
    }

}

const RelevantStates = {

    LastFeaturedImageIndex: -1,
    
    IsMobile: window.innerWidth < 768

}

function GetNextImage(): FeaturedImage {

    if (RelevantStates.LastFeaturedImageIndex == -1) {

        // Start at a random index within the array of FeaturedImages

        RelevantStates.LastFeaturedImageIndex = Math.floor(Math.random() * FeaturedImages.length);

    }

    if (RelevantStates.LastFeaturedImageIndex >= FeaturedImages.length) {

        // If the index is out of bounds, we reset it to 0

        RelevantStates.LastFeaturedImageIndex = 0;

    }

    const RandomImage = FeaturedImages[RelevantStates.LastFeaturedImageIndex];

    RelevantStates.LastFeaturedImageIndex++; // for next time
        
    return RandomImage;

}

export function HandleFeaturedSection(): void {

    // Wait to initially load to show to avoid bad UX

    RelevantElements.Container.on("load", () => {

        RelevantElements.Container.fadeIn(AnimationTimes.Short, () => {

            RelevantElements.Container.css("opacity", "1");

        });
    });

    UpdateFeaturedSection(GetNextImage());

    setInterval(async () => {

        const NewImage = GetNextImage();

        if (RelevantStates.IsMobile) {

            // We will skip the animation to avoid webkit bugs (ugh)

            UpdateFeaturedSection(NewImage)

        } else {

            RelevantElements.Container.fadeOut(AnimationTimes.Short, () => {

                UpdateFeaturedSection(NewImage);

                RelevantElements.Container.fadeIn(AnimationTimes.Short);
            
            });
            
        }
    
    }, FeaturedImageUpdateInterval);

}

export function UpdateFeaturedSection(Image: FeaturedImage): void {

    RelevantElements.Container.css("background-image", `url("${Image.ImageURL}")`);
    RelevantElements.Backdrop.fadeOut(AnimationTimes.Short);

    RelevantElements.Meta.Date.text(Image.Meta.Date);
    RelevantElements.Meta.Location.text(Image.Meta.Location);
    RelevantElements.Meta.Title.text(Image.Title);

    setTimeout(() => {

        RelevantElements.Backdrop.hide();
        RelevantElements.Backdrop.attr("src", Image.ImageURL);
        RelevantElements.Backdrop.fadeIn(AnimationTimes.Long);

    }, AnimationTimes.Short); 

}