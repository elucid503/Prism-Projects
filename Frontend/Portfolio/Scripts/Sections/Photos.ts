import $ from "jquery";

import { MasonryPhotos, type MasonryPhoto } from "../Content";

import { AnimationTimes } from "../Misc/Structs";

import { Log } from "../Misc/Utils";

const RelevantElements = {

    Container: $(".PhotosMasonry"),

    Popout: {

        Container: $(".Container.PhotoPopout"),
        Content: $(".Container.PhotoPopoutContent"),

        Info: {

            Container: $(".Container.PhotoPopoutInfo"),

            Title: $(".PhotoPopoutInfoTitle"),
            Location: $(".PhotoPopoutLocation"),

        },

        Image: $(".PhotoPopoutImage"),
        Close: $(".PhotoPopoutCloseButton"),
        Download: $(".PhotoPopoutDownloadButtonLink"),

    }

}

const RelevantStates = {

    IsLoading: false,
    IsMobile: window.innerWidth < 768,

}

export function GeneratePhotoMasonryItem(Data: MasonryPhoto): string {

    // SmallScaled is used for the masonry photos in this case. When expanded, the other URLs will be used

    return /*html*/`
    
      <div class="PhotoMasonryItem ${Data.Enum}">

        <img src="${Data.URLs.SmallScaled}" alt="${Data.Title}" draggable="false">

      </div>

    `;

}

export function HandlePhotoMasonry(): void {

    RelevantElements.Container.empty();

    let Photos: MasonryPhoto[] = MasonryPhotos;

    if (RelevantStates.IsMobile) {

        // We will only use half of the photos for the mobile version

        const HalfOfPhotos = Math.floor(MasonryPhotos.length / 2);
        
        Photos = Photos.sort(() => Math.random() - 0.5).slice(0, HalfOfPhotos); // shuffled and sliced

    }

    for (const MasonryPhoto of Photos) {

        RelevantElements.Container.append(GeneratePhotoMasonryItem(MasonryPhoto));

    }

    RelevantElements.Container.children().hide().fadeIn(AnimationTimes.Short);
    
    HandlePhotoPopoutOpen();
    HandlePhotoPopoutClose();

}

async function WaitForPhotoLoad(MPhoto: MasonryPhoto, Quality: "SmallScaled" | "Small" | "Medium" | "Large"): Promise<void> {

    return new Promise((Resolve) => {

        const ImageElement = new Image();

        ImageElement.src = MPhoto.URLs[Quality];

        ImageElement.onload = () => {

            Resolve();

        }

        ImageElement.onerror = () => {

            Log("Error", `Failed to load image ${MPhoto.URLs[Quality]} in ${Quality} quality`);
            
            Resolve();

        }

    });

}

function HandlePhotoPopoutOpen(): void {

    RelevantElements.Container.children().each(function() {

        $(this).on("click", async function (Event: JQuery.ClickEvent) {
            
            if (RelevantStates.IsLoading) { return; }

            const Enum = Event.currentTarget.classList[1]

            const Photo = MasonryPhotos.find((Photo) => Photo.Enum === Enum);

            if (!Photo) return;

            RelevantStates.IsLoading = true;

            await WaitForPhotoLoad(Photo, "Medium"); // Better for UX

            RelevantStates.IsLoading = false;

            ShowPhotoPopout(Photo);

        });

    });

}

function HandlePhotoPopoutClose(): void {

    // Multiple ways to close for good UX

    RelevantElements.Popout.Close.on("click", function () {

        // Close Button

        HidePhotoPopout();

    });

    RelevantElements.Popout.Content.on("click", function (Event: JQuery.ClickEvent) {

        // Outside Click

        if (Event.target === RelevantElements.Popout.Content[0]) {

            HidePhotoPopout();

        }

    });

    $(document).on("keydown", function (Event: JQuery.KeyDownEvent) {
        
        // Escape key

        if (Event.key === "Escape") {

            HidePhotoPopout();

        }

    });

}

function ShowPhotoPopout(Photo: MasonryPhoto): void {

    RelevantElements.Popout.Image.attr("src", Photo.URLs.Medium);
    RelevantElements.Popout.Download.attr("href", Photo.URLs.Large);

    RelevantElements.Popout.Info.Title.text(Photo.Title);
    RelevantElements.Popout.Info.Location.text(Photo.Location);

    RelevantElements.Popout.Container.fadeIn(AnimationTimes.Short);

}

function HidePhotoPopout(): void {

    RelevantElements.Popout.Container.fadeOut(AnimationTimes.Short);

}