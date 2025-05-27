// ./src/sanity/schemaTypes/category.ts
import { defineField, defineType } from "sanity";
import { CustomMarkdownInput } from "../components/CustomMarkdownInput";

export const contentType = defineType({
  name: "content",
  type: "document",
  fields: [
    defineField({
  type: 'document',
  name: 'myDocument',
  fields: [
    {
      type: 'markdown',
      description: 'A Github flavored markdown field with image uploading',
      name: 'bio',
    },
  ],
}),
defineField({
  type: 'markdown',
  name: 'markdown',
  title: 'Markdown',
  components: {input: CustomMarkdownInput},
  options: {imageUrl: (imageAsset) => `${imageAsset.url}?w=600`},
  
}),
  ],
});