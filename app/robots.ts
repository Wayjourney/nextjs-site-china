import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: ['/private/', '/admin/', '/tmp/', '/cgi-bin/']
    },
    sitemap: 'https://zzreass.com/sitemap.xml',
  }
}