import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/seo'
import { projects } from '@/lib/site-content/projects'
import { services } from '@/lib/site-content/services'

const lastModified = new Date('2026-08-15T00:00:00-03:00')

const staticRoutes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/projects', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/agendar-reuniao', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/solicitar-orcamento', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' as const },
  { path: '/terms', priority: 0.2, changeFrequency: 'yearly' as const },
  { path: '/cookies', priority: 0.2, changeFrequency: 'yearly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  const projectRoutes = projects.map((project) => ({
    path: `/projects/${project.slug}`,
    priority: project.featured ? 0.8 : 0.6,
    changeFrequency: 'monthly' as const,
  }))

  const routes = [...staticRoutes, ...serviceRoutes, ...projectRoutes]
  const seen = new Set<string>()

  return routes
    .filter((route) => {
      if (seen.has(route.path)) return false
      seen.add(route.path)
      return true
    })
    .map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }))
}
