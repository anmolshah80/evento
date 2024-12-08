'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  const imageUrl = 'https://bytegrad.com/course-assets/react-nextjs/evento.png';

  const [imageSrc, setImageSrc] = useState(imageUrl);

  return (
    <Link href="/">
      <Image
        src={imageSrc}
        width={53}
        height={12}
        alt="Evento"
        onError={() => {
          setImageSrc('/evento.png');
        }}
      />
    </Link>
  );
};

export default Logo;
