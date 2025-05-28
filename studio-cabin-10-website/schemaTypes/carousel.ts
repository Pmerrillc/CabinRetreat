// ./src/sanity/schemaTypes/category.ts
import { defineField, defineType } from "sanity";

export const carouselType = defineType({
  name: "carousel",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "images",
      type: "array",
      of: [
    defineField({
      name: 'image',
      type: 'image',
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          validation: (Rule) => Rule.required()
        },
      ],
      validation: (Rule) => Rule.required()
    }),
      ],
      validation: (Rule) => Rule.required()
    }),
  ],
});