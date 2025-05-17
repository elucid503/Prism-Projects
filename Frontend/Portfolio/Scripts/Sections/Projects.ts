import $ from "jquery";

import { ProjectCards, type ProjectCard } from "../Content";

import { AnimationTimes } from "../Misc/Structs";

const RelevantElements = {

    Container: $(".ProjectCards"),

}

const RelevantStates = {

}

export function GenerateProjectCard(Data: ProjectCard): string {

    return /*html*/`
    
        <div class="Container Glass HorizontalFlex ProjectCard">

            <div class="Container NoPadding Transparent VerticalFlex ProjectCardText">

                <div class="Container NoPadding Transparent ProjectCardTitle">

                    ${Data.Title}

                </div>

                <div class="Container NoPadding Transparent ProjectCardDescription">

                    ${Data.Description}
                
                </div>

            </div>

            <div class="Container Center NoPadding Transparent ProjectCardIcon">

                <ion-icon name="${Data.IconName}"></ion-icon>
            
            </div>

        </div>

    `;

}

export function HandleProjectCards(): void {

    RelevantElements.Container.empty();

    for (const Card of ProjectCards) {

        RelevantElements.Container.append(GenerateProjectCard(Card));

    }

    // Fade-In Animation ?

    RelevantElements.Container.children().hide().fadeIn(AnimationTimes.Short);

}