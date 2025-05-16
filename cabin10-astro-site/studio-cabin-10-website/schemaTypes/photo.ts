import {defineField, defineType} from 'sanity'

export const photoType = defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      type: 'image',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'photoDescription',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'mediumImage',
      type: 'image',
    }),
    defineField({
      name: 'smallImage',
      type: 'image',
    }),
]
})