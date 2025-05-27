import { type ImageAsset } from "sanity";
import { type Carousel } from "./component-types";
import { type ImageText } from "./component-types";

interface ValidComponents {
    imageAndText: ImageText;
    secondImageAndText: ImageText;
    thirdImageAndText: ImageText;
    carouselImages: Carousel;
    contactImage: {
        alt: string;
        asset: ImageAsset
    }
}

export interface AboutPage {
    data: Array<ValidComponents>
}