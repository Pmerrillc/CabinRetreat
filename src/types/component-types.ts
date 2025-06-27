import { type ImageSet } from "./image-set";
import type { ImageAsset } from "sanity";

export interface Hero {
  hero: {
        heading: string;
        subheading: string;
        backgroundImage: ImageSet;
}}

export interface ImageText {
                image: {
                  asset: ImageAsset;
                  alt: string;
                };
                text: string;
                buttonText: string;
                eyebrowText?: string;
                heading?: string;
}


export interface BlogPost {
        title: string;
        slug: { 
          current: string
        };
        subheading: string;
        markdown: string;
        publishedAt: string;
        mainImage: { 
          asset: ImageAsset
        };
}

export interface Carousel {
  images: Array<{asset: ImageAsset, alt: string}>
}