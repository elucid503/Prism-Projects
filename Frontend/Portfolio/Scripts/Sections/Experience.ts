import $ from "jquery";

import { ExperienceTimelineNodes } from "../Content";

import { AnimationTimes } from "../Misc/Structs";

const RelevantElements = {

    Container: $(".ExperienceTimelineNodes"),

}

// const RelevantStates = {

// }

const ElementTemplates = {

    Line: `<div class="ExperienceTimelineLine"></div>`

}

export interface ExperienceTimelineNode {

    IconName: string;

    Title: string;
    Time: string;

    Description?: string;

}

export function GenerateExperienceTimelineNode(Data: ExperienceTimelineNode): string {

    return /*html*/`
    
      <div class="Container NoPadding Transparent HorizontalFlex ExperienceTimelineNode">

        <div class="Container NoPadding VerticalFlex ExperienceTimelineNodeBubble">

            <ion-icon name="${Data.IconName}"></ion-icon>
        
        </div>
        
        <div class="Container NoPadding Transparent VerticalFlex ExperienceTimelineNodeInfo">

          <span class="ExperienceTimelineNodeInfo Title">${Data.Title}</span>
          <span class="ExperienceTimelineNodeInfo Time">${Data.Time}</span>

          <span class="ExperienceTimelineNodeInfo Description">

            ${Data.Description}
          
          </span>

        </div>

      </div>

    `;

}

export function HandleExperienceTimeline(): void {

    RelevantElements.Container.empty();

    for (const Node of ExperienceTimelineNodes) {

        RelevantElements.Container.append(GenerateExperienceTimelineNode(Node));

        if (Node !== ExperienceTimelineNodes[ExperienceTimelineNodes.length - 1]) {

            RelevantElements.Container.append(ElementTemplates.Line); // adds a "line" after connecting to "next down" if not the last node

        }

    }

    // Fade-In Animation ?

    RelevantElements.Container.children().hide().fadeIn(AnimationTimes.Short);

}