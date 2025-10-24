import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titulo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{type: 'postCategories'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publicado el',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Imagen destacada',
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: [{type: 'postAuthors'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Descripcion',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'},
        defineArrayMember({
          type: 'audioEmbed',
        }),
        defineArrayMember({
          type: 'youTube',
        }),
      ],
    }),
    defineField({name: 'isFeatured', type: 'boolean', initialValue: false}),
  ],
})
