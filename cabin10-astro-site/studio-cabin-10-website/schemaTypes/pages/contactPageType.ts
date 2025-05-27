import {defineField, defineType} from 'sanity'

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'imageAndText',
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