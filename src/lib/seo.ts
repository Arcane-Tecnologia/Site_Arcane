import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const siteUrl = 'https://arcane.tech'

export function absoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString()
}

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.seo.ogImage,
  type = 'website',
}: {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}): Metadata {
  const canonical = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type,
      url: canonical,
      locale: 'pt_BR',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}
