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

    UpdateFeaturedSection(GetNextImage());

    setInterval(async () => {

        const NewImage = GetNextImage();

        RelevantElements.Container.fadeOut(AnimationTimes.Short, () => {

            UpdateFeaturedSection(NewImage);

            RelevantElements.Container.fadeIn(AnimationTimes.Short);
            
        });
    
    }, FeaturedImageUpdateInterval);

    // Backdrop must be fixed because WebKit hates us, so we will bind a mouse scroll and pretend like its not fixed

    document.addEventListener("scroll", () => {

        const ScrollY = window.scrollY || document.documentElement.scrollTop;

        RelevantElements.Backdrop.css("transform", `translateY(-${ScrollY}px)`);

    });
    
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