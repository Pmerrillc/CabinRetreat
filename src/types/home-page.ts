import { type ImageAsset } from "sanity";
import { type Hero, type ImageText } from "./component-types";

interface ValidComponents {
    hero: Hero;
    imageAndText: ImageText;
    secondImageAndText: ImageText;
    contactImage: {
          asset: ImageAsset;
          alt: string;
    }}

export interface HomePage {
    data: Array<ValidComponents>
}