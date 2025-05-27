import { type ImageAsset } from "sanity";
import { type ImageText } from "./component-types";

interface ValidComponents {
    imageAndText: ImageText;
    contactImage: {
        alt: string;
        asset: ImageAsset
    }
}

export interface ContactPage {
    data: Array<ValidComponents>
}