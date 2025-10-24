import {defineField, defineType} from 'sanity'
import {AudioEmbedPreview} from './audio-preview'
import {PlayIcon} from '@sanity/icons'

export const audioEmbed = defineType({
  name: 'audioEmbed',
  type: 'object',
  title: 'Audio Embed',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'platform',
      type: 'string',
      options: {
        list: ['spotify', 'soundcloud', 'apple-music'],
      },
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Embed URL',
    }),
  ],
  preview: {
    select: {
      url: 'url',
      platform: 'platform',
    },
  },
  components: {
    preview: AudioEmbedPreview,
  },
})
