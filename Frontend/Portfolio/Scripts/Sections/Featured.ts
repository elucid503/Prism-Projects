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

    LastFeaturedImage: null as FeaturedImage | null,
    NextFeaturedImage: null as FeaturedImage | null

}

function GetAndLoadRandomImage(): FeaturedImage {

    const RandomImage = FeaturedImages[Math.floor(Math.random() * FeaturedImages.length)];

    if (FeaturedImages.length > 1 && RandomImage === RelevantStates.LastFeaturedImage) {

        return GetAndLoadRandomImage(); // Recursion to avoid the same image being shown twice in a row

    }

    const DOMImage = new Image();
    DOMImage.src = RandomImage.ImageURL;

    RelevantStates.LastFeaturedImage = RandomImage;

    return RandomImage;

}

export function HandleFeaturedSection(): void {

    // Wait to initially load to show to avoid bad UX

    RelevantElements.Container.on("load", () => {

        RelevantElements.Container.fadeIn(AnimationTimes.Short, () => {

            RelevantElements.Container.css("opacity", "1");

        });
    });

    UpdateFeaturedSection(GetAndLoadRandomImage());
    RelevantStates.NextFeaturedImage = GetAndLoadRandomImage();

    setInterval(async () => {

        const NewImage = RelevantStates.NextFeaturedImage || GetAndLoadRandomImage();

        RelevantElements.Container.fadeOut(AnimationTimes.Short, () => {

            UpdateFeaturedSection(NewImage);

            RelevantElements.Container.fadeIn(AnimationTimes.Short);
            
            RelevantStates.NextFeaturedImage = GetAndLoadRandomImage(); // Preloading the next image

        });
    
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