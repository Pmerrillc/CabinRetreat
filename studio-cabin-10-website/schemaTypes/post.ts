// ./src/sanity/schemaTypes/post.ts
import { defineField, defineType } from "sanity";
import { CustomMarkdownInput } from "../components/CustomMarkdownInput";

export const postType = defineType({
  name: "post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "subheading",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
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