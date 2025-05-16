import type { ImageAsset } from "sanity";

export interface ImageSet {
    mainImage: {
        asset: ImageAsset
    };
    photoDescription: string;
    mediumImage?:{
        asset: ImageAsset;
    }
    smallImage?:{
        asset: ImageAsset;
    }
}