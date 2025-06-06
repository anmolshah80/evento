import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Event';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

type ImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Image generation
const Image = async ({ params }: ImageProps) => {
  const { slug } = await params;

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <section>
        <h1>{slug}</h1>
        <p>Evento — Browse events around you</p>
      </section>
    ),
    // ImageResponse options
    {
      ...size,
    },
  );
};

export default Image;
