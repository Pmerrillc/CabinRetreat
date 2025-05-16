import { type ImageSet } from "./image-set";

export interface Hero {
        heading: string;
        subheading: string;
        backgroundImage: ImageSet;
}

export interface ImageText {
        photo: ImageSet;
        text: string;
        buttonText: string;
        eyebrowText?: string;
        heading?: string;

}