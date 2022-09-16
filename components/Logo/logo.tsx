import image from '../../public/plairsty.svg';

import React from 'react';
import Image from 'next/image';

const logo = () => {
  return (
    <div>
      <Image src={image} width={75} height={75} />
    </div>
  );
};

export default logo;
