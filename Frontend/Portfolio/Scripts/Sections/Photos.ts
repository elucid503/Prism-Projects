import $ from "jquery";

import { MasonryPhotos, type MasonryPhoto } from "../Content";

import { AnimationTimes } from "../Misc/Structs";

const RelevantElements = {

    Container: $(".PhotosMasonry"),

}

// const RelevantStates = {

// }

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

    for (const MasonryPhoto of MasonryPhotos) {

        RelevantElements.Container.append(GeneratePhotoMasonryItem(MasonryPhoto));

    }

    RelevantElements.Container.children().hide().fadeIn(AnimationTimes.Short);

}