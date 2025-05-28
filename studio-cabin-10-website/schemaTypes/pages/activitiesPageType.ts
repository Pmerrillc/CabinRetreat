import {defineField, defineType} from 'sanity'

export const activitiesPageType = defineType({
  name: 'thingsToDoPage',
  title: 'Things To Do Page',
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
      name: 'fourthImageAndText',
      type: 'reference',
      to: [{type: "imageAndText"}]
    }),
    defineField({
      name: 'fifthImageAndText',
      type: 'reference',
      to: [{type: "imageAndText"}]
    }),
]
})