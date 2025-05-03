import $ from "jquery";

import { Question, AnswerBreakdown, AnswerFadeConfig } from "../Config";
import { AnimationTimes } from "../Misc/Structs";
import { SetHighlight, ShowHighlight } from "./Highlight";

const RelevantElements = {

    Question: $(".Container.Question"),
    Response: $(".Container.Response"),

    Highlight: {

        Seperator: $(".Line.HighlightSeperator"),
        Container: $(".Container.ResponseHighlightPopIn")

    }
    
}

export function RenderResponse(): string[] {

    // For each phrase highlighted in the answer breakdown, we'll put it into a span

    const QuestionPhrases = Object.keys(AnswerBreakdown);

    const Rendered = QuestionPhrases.map((Phrase) => {

        return `<span class="Phrase">${Phrase} </span>`;
    
    })

    return Rendered;

}

export function InitiateQandA() {

    // Set question

    RelevantElements.Question.html(Question);

    // Render answer

    const RenderedAnswer = RenderResponse();

    // Set answer

    RelevantElements.Response.html(RenderedAnswer.join(""));

    // Preserve height before doing stuff for UX

    const CalculateAndSetHeight = () => {

        const CalculatedHeight = RelevantElements.Response[0].scrollHeight;
        RelevantElements.Response.css("height", CalculatedHeight + "px");
        
    }

    CalculateAndSetHeight();

    $(window).on("resize", CalculateAndSetHeight); // Also bind to resize here since we're only calling this once, and its good UX to have it

    // Set the body to the top to avoid scroll problems 

    document.scrollingElement?.scrollTo(0, 0);

    // Prime the animation

    RelevantElements.Response.find(".Phrase").css("display", "none");

    // Fade in the answer by phrase

    RelevantElements.Response.find(".Phrase").each((Index, Element) => {

        const StaggeredDelayTime = Index * AnswerFadeConfig.Delay;

        $(Element).delay(Math.max(0, StaggeredDelayTime)).fadeIn(AnimationTimes.Short);

    });

    WatchPhraseClicks(); // Watch for clicks on phrases

    // Clean up after the animation is done
    
    const LastPhrase = RelevantElements.Response.find(".Phrase").last();
    const LastPhraseDelay = (LastPhrase.index() * AnswerFadeConfig.Delay) + AnimationTimes.Short;

    setTimeout(async () => {

        // Show next section after a bit more of a delay

        await new Promise((resolve) => setTimeout(resolve, AnimationTimes.Long)); 

        RelevantElements.Highlight.Seperator.fadeIn(AnimationTimes.Short);
        RelevantElements.Highlight.Container.fadeIn(AnimationTimes.Short);
        
    }, LastPhraseDelay);
    
}

function WatchPhraseClicks() {
    
    $(".Phrase").on("click", (Event: JQuery.ClickEvent) => {

        const Target = $(Event.currentTarget);
        const PhraseIndex = Target.index();

        if (Target.hasClass("Selected")) {

        } else {

            SetHighlight(PhraseIndex);
            ShowHighlight();
            
        }

        Target.toggleClass("Selected"); 
        $(".Phrase").not(Target).removeClass("Selected"); // Important: all others are no longer selected

    });
    
}