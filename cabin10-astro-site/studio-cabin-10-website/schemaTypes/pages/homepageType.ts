import {defineField, defineType} from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
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
]
})