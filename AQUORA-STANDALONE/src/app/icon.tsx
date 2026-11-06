import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

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
          fontSize: 20,
          background: '#08070A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#D4AF37',
          borderRadius: '50%',
          border: '1.5px solid #D4AF37',
          fontFamily: 'serif',
          fontWeight: 700,
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  )
}
