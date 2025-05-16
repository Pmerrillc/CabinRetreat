import { type Hero, type ImageText } from "../types/component-types";

type ValidComponts = Hero | ImageText

interface ValidComponents {
    hero: Hero;
    imageAndText: ImageText;
}

export interface HomePage {
    data: Array<ValidComponents>
}