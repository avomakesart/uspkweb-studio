import { defineField, defineType } from 'sanity'

export const postAuthorsType = defineType({
  name: 'postAuthors',
  title: 'Post Authors',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'picture',
      type: 'image',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'picture',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {title, media, publishedAt} = selection
      return {
        title: title || 'No name',
        subtitle: publishedAt ? new Date(publishedAt).toLocaleDateString() : '',
        media,
      }
    },
  },
})
