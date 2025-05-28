import type { SchemaTypeDefinition } from "sanity";
import { heroType } from "./hero"
import { homepageType } from "./pages/homepageType"
import { aboutPageType } from "./pages/aboutPageType"
import { photoType } from "./photo"
import { imageAndTextType } from "./imageAndText"
import { blockContentType } from "./blockContent";
import { categoryType } from "./category";
import { postType } from "./post";
import { contentType } from "./content"
import { carouselType } from "./carousel";
import { contactPageType } from "./pages/contactPageType";
import { activitiesPageType } from "./pages/activitiesPageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepageType,
    aboutPageType,
    contactPageType,
    activitiesPageType,
    blockContentType, 
    categoryType, 
    postType, 
    heroType, 
    photoType, 
    imageAndTextType, 
    contentType,
    carouselType,
  ],
};