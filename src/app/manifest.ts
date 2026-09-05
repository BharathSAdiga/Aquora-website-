import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AQUORA Yoga & Dance Studio',
    short_name: 'AQUORA',
    description: 'AQUORA Yoga & Dance Studio in JP Nagar, Bengaluru, offering Yoga, Western Dance and Bharatanatyam classes for all age groups.',
    start_url: '/',
    display: 'standalone',
    background_color: '#08070A',
    theme_color: '#D4AF37',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
