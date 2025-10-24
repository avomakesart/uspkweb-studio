import type {PreviewProps} from 'sanity'
import {Flex, Text} from '@sanity/ui'

export function AudioEmbedPreview(props: PreviewProps) {
  const {url, platform} = props as PreviewProps & {
    url?: string
    platform?: string
  }

  const getEmbedUrl = () => {
    if (!url) return null

    if (platform === 'spotify') {
      const match = url.match(/spotify\.com\/(track|album|playlist|episode)\/([a-zA-Z0-9]+)/)
      if (match) {
        return `https://open.spotify.com/embed/${match[1]}/${match[2]}`
      }
    }

    if (platform === 'soundcloud') {
      return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`
    }

    return null
  }

  const embedUrl = getEmbedUrl()

  return (
    <Flex padding={3} align="center" justify="center" direction="column">
      {embedUrl ? (
        <iframe
          src={embedUrl}
          width="100%"
          height="166"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          style={{border: 'none'}}
        />
      ) : (
        <Text>Add a {platform || 'audio'} URL</Text>
      )}
    </Flex>
  )
}
