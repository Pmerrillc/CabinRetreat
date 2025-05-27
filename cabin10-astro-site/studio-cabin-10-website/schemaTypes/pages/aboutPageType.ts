import {defineField, defineType} from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
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
      name: 'thirdImageAndText',
      type: 'reference',
      to: [{type: "imageAndText"}]
    }),
    defineField({
      name: 'carouselImages',
      type: 'reference',
      to: [{type: "carousel"}]
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