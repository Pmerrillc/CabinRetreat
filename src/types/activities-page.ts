import { type ImageText } from "./component-types";

interface ValidComponents {
    imageAndText: ImageText;
    secondImageAndText: ImageText;
    thirdImageAndText: ImageText;
    fourthImageAndText: ImageText;
    fifthImageAndText: ImageText;
}

export interface ThingsToDoPage {
    data: Array<ValidComponents>
}