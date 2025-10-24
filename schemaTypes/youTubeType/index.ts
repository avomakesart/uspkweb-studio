import {VideoIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import {YouTubePreview} from './youtube-preview'

export const youtube = defineType({
  name: 'youTube',
  type: 'object',
  title: 'YouTube Embed',
  icon: VideoIcon,
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    }),
  ],
  preview: {
    select: {title: 'url'},
  },
  components: {
    preview: YouTubePreview,
  },
})
