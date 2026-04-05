import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'T&T Driver Portal',
    short_name: 'Driver',
    description: 'Nền tảng điều phối và thao tác nghiệp vụ dành cho Tài xế T&T',
    start_url: '/',
    display: 'standalone',
    background_color: '#f9f9ff',
    theme_color: '#006948',
    icons: [
      {
        src: '/icon.png', // Fallback, but actually next.js intercepts /icon depending on layout 
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
