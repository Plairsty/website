import image from '../../public/vercel.svg';

import React from 'react';
import Image from 'next/image';

const logo = () => {
  return (
    <div>
      <Image src={image} width={100} />
    </div>
  );
};

export default logo;
