import {defineField, defineType} from 'sanity'

export const imageAndTextType = defineType({
  name: 'imageAndText',
  title: 'ImageAndText',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
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
    defineField({
      name: 'text',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
    }),
    defineField({
      name: 'eyebrowText',
      type: 'string',
    }),
]
})