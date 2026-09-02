import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: '#42104A', // velvet purple
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#E6D7C3', // warm beige
          borderRadius: '50%',
          border: '1.5px solid #E6D7C3',
          fontFamily: 'serif',
          fontWeight: 'bold',
        }}
      >
        V
      </div>
    ),
    {
      ...size,
    }
  )
}
