import gsap from 'gsap';
import React, { useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaBandcamp, FaLinkedin, FaMedium, FaSpotify } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';

export default function Contact() {
  let ids = ['#github', '#email', '#linkedin', '#medium', '#music'];

  useEffect(() => {
    ids.forEach((id) => {
      let t2 = gsap.timeline({
        scrollTrigger: {
          trigger: id,
          start: '-100% 70%',
          end: '200% 70%',
          scrub: true,
          markers: false,
        },
      });

      t2.fromTo(id, { opacity: 0 }, { opacity: 1 });
    });

    return () => {};
  }, []);

  return (
    <div className='w-full h-1/2 absolute font-spaceGrotesk text-2xl'>
      <div
        id='email'
        className='w-full flex justify-center absolute top-[0%] place-items-center space-x-3'
      >
        <p>contact...</p>
        <a
          target='_blank'
          className='hover:text-white hover: hover:shadow-md transition ease-in-out text-7xl '
          href='mailto:izaakdaledev.com'
        >
          <IoIosMail />
        </a>
      </div>
      <div
        id='linkedin'
        className='w-full flex justify-center absolute top-[20%] place-items-center space-x-3'
      >
        <p>connect...</p>
        <a
          target='_blank'
          className='hover:text-white hover: hover:shadow-md transition ease-in-out text-7xl '
          href='mailto:izaakdaledev.com'
        >
          <FaLinkedin />
        </a>
      </div>
      <div
        id='github'
        className='w-full flex justify-center absolute top-[40%] place-items-center space-x-3'
      >
        <p>collaborate...</p>
        <a
          target='_blank'
          className='hover:text-white hover: hover:shadow-md transition ease-in-out text-7xl '
          href='https://github.com/izaakdale'
        >
          <BsGithub />
        </a>
      </div>
      <div
        id='medium'
        className='w-full flex justify-center absolute top-[60%] place-items-center space-x-3'
      >
        <p>read...</p>
        <a
          target='_blank'
          className='hover:text-white hover: hover:shadow-md transition ease-in-out text-7xl '
          href='https://medium.com/@izaakdaledev'
        >
          <FaMedium />
        </a>
      </div>
      <div
        id='music'
        className='w-full flex justify-center absolute top-[80%] place-items-center space-x-3'
      >
        <p>listen...</p>
        <a
          target='_blank'
          className='hover:text-white hover: hover:shadow-md transition ease-in-out text-7xl '
          href='https://open.spotify.com/artist/4Ui3bcuKsX7odhmPJIXs4u?si=x39i46qTRdq33iZmFKS0lw'
        >
          <FaSpotify />
        </a>
        <a
          target='_blank'
          className='hover:text-white hover: hover:shadow-md transition ease-in-out text-7xl '
          href='https://izaakdale.bandcamp.com/'
        >
          <FaBandcamp />
        </a>
      </div>
    </div>
  );
}
