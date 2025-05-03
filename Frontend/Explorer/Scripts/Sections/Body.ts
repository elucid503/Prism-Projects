import $ from "jquery";

import { AnimationTimes } from "../Misc/Structs";

export function FadeInBody(): void {

    $(document.body).fadeIn(AnimationTimes.Short);

}