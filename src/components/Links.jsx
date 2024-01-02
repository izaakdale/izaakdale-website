import React from 'react';

export default function Links() {
  return (
    <div className='flex text-3xl w-full justify-center space-x-4'>
      <a
        target='_blank'
        className='hover:text-white transition ease-in-out'
        href='https://www.linkedin.com/in/izaak-dale/'
      >
        <BsLinkedin />
      </a>
      <a
        target='_blank'
        className='hover:text-white transition ease-in-out'
        href='https://github.com/izaakdale'
      >
        <BsGithub />
      </a>
      <a
        target='_blank'
        className='hover:text-white transition ease-in-out'
        href='https://medium.com/@izaakdaledev'
      >
        <BsMedium />
      </a>
    </div>
  );
}
