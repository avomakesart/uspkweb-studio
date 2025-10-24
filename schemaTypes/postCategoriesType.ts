import { defineField, defineType } from 'sanity'

export const postCategoriesType = defineType({
  name: 'postCategories',
  title: 'Post Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nombre de la categoria',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Descripcion',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'picture',
      type: 'image',
      title: 'Imagen para la categoria',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: "Publicado el",
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
