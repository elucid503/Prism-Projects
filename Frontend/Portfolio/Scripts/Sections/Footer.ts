import $ from "jquery";

import { FooterLinks, type FooterLink } from "../Content";

import { AnimationTimes } from "../Misc/Structs";

const RelevantElements = {

    Container: $(".Container.FooterLinks"),

}

// const RelevantStates = {

// }

export function GenerateFooterLink(Data: FooterLink): string {

    return /*html*/`
        
        <a href="${Data.URL}" target="_blank" class="FooterLink">

            <span class="FooterLinkText">${Data.Title}</span>

            <ion-icon name="${Data.IconName}"></ion-icon>

        </a>

    `;

}

export function HandleFooterLinks(): void {

    RelevantElements.Container.empty();

    for (const Card of FooterLinks()) {

        RelevantElements.Container.append(GenerateFooterLink(Card));

    }

    // Fade-In Animation ?

    RelevantElements.Container.children().hide().fadeIn(AnimationTimes.Short);

}