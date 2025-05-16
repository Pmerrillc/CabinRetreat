import {defineField, defineType} from 'sanity'

export const imageAndTextType = defineType({
  name: 'imageAndText',
  title: 'ImageAndText',
  type: 'document',
  fields: [
    defineField({
      name: 'photo',
      type: 'reference',
      to: [{type: "photo"}],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'text',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'eyebrowText',
      type: 'string',
    }),
]
})