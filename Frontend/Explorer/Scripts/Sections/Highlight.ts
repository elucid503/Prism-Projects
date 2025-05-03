import $ from "jquery";

import { AnswerBreakdown } from "../Config";

import { AnimationTimes } from "../Misc/Structs";

const RelevantElements = {

    HighlightContainer: $(".Container.ResponseHighlightPopIn"),
    HighlightContent: $(".Container.ResponseHighlight"),

    Placeholder: {
     
        Container: $(".Container.ResponseHighlightPlaceholder"),
        Action: $(".ResponseHighlightPlaceholderAction"),
        
    }
    
}

export function InitiateHighlightPlaceholder(): void {

    const IsMobile = window.innerWidth < 768; // Not really the best method, but this is fine

    const PlaceholderText = IsMobile ? "Tap" : "Hover and click";

    RelevantElements.Placeholder.Action.text(PlaceholderText + " "); // Extra space needed

}

export function SetHighlight(AssociatedPhraseIndex: number): void {

    const AllPhrases = Object.entries(AnswerBreakdown);
    
    const AssociatedPhraseDescription = AllPhrases[AssociatedPhraseIndex][1];

    RelevantElements.HighlightContent.html(AssociatedPhraseDescription); // .html is useful here since sometimes we'll have tags in the descriptions
    
}

export function ShowHighlight(): void {

    RelevantElements.HighlightContainer[0].scrollIntoView({ behavior: "smooth", block: "nearest" });

}

export function HideHighlight(): void {

    RelevantElements.HighlightContainer.fadeOut(AnimationTimes.Short, () => {

        RelevantElements.HighlightContent.html(""); // Resetting content; good practice here ig 

    });
    
}