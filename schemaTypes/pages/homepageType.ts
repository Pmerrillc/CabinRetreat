import {defineField, defineType} from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      type: 'reference',
      to: [{type: "hero"}]
    }),
    defineField({
      name: 'imageAndText',
      type: 'reference',
      to: [{type: "imageAndText"}]
    }),
    defineField({
      name: 'secondImageAndText',
      type: 'reference',
      to: [{type: "imageAndText"}]
    }),
    defineField({
      name: "contactImage",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
]
})