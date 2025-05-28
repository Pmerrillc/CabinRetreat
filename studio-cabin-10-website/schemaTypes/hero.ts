import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'subheading',
      type: 'string',
      validation: (Rule) => Rule.required()
    })
]
})