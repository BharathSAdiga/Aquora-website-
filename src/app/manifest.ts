import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Velora Yoga & Dance Studio',
    short_name: 'Velora',
    description: 'Velora Yoga & Dance Studio in JP Nagar, Bengaluru, offering yoga, Western dance and Bharatanatyam classes for different age groups.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fdfbf7', // velora-bg
    theme_color: '#2a1b2d', // velora-primary
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
