import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaBandcamp, FaLinkedin, FaMedium, FaSpotify } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';

export default function Contact() {
  let ids = ['#email', '#linkedin', '#github', '#medium', '#music'];

  const comp = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({});

      t1.from(ids, {
        opacity: 0,
        x: -100,
        stagger: 0.1,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className='relative'>
      <div
        ref={comp}
        className='h-screen flex flex-col justify-center place-items-center space-y-12 font-spaceGrotesk text-fuchsia-100'
      >
        <div
          id='email'
          className='w-full flex justify-center place-items-center space-x-3'
        >
          <p>contact...</p>
          <a
            target='_blank'
            className='hover:text-white text-fuchsia-200 hover:shadow-md transition ease-in-out text-5xl '
            href='mailto:izaakdaledev.com'
          >
            <IoIosMail />
          </a>
        </div>
        <div
          id='linkedin'
          className='w-full flex justify-center place-items-center space-x-3'
        >
          <p>connect...</p>
          <a
            target='_blank'
            className='hover:text-white text-fuchsia-200 hover:shadow-md transition ease-in-out text-5xl '
            href='https://linkedin.com/in/izaak-dale'
          >
            <FaLinkedin />
          </a>
        </div>
        <div
          id='github'
          className='w-full flex justify-center place-items-center space-x-3'
        >
          <p>collaborate...</p>
          <a
            target='_blank'
            className='hover:text-white text-fuchsia-200 hover:shadow-md transition ease-in-out text-5xl '
            href='https://github.com/izaakdale'
          >
            <BsGithub />
          </a>
        </div>
        <div
          id='medium'
          className='w-full flex justify-center place-items-center space-x-3'
        >
          <p>read...</p>
          <a
            target='_blank'
            className='hover:text-white text-fuchsia-200 hover:shadow-md transition ease-in-out text-5xl '
            href='https://medium.com/@izaakdaledev'
          >
            <FaMedium />
          </a>
        </div>
        <div
          id='music'
          className='w-full flex justify-center place-items-center space-x-3'
        >
          <p>listen...</p>
          <a
            target='_blank'
            className='hover:text-white text-fuchsia-200 hover:shadow-md transition ease-in-out text-5xl '
            href='https://open.spotify.com/artist/4Ui3bcuKsX7odhmPJIXs4u?si=x39i46qTRdq33iZmFKS0lw'
          >
            <FaSpotify />
          </a>
          <a
            target='_blank'
            className='hover:text-white text-fuchsia-200 hover:shadow-md transition ease-in-out text-5xl '
            href='https://izaakdale.bandcamp.com/'
          >
            <FaBandcamp />
          </a>
        </div>
      </div>
    </div>
  );
}
