import gsap from 'gsap';
import React, { useEffect } from 'react';
import { FaAws, FaDocker, FaGolang, FaReact, FaRust } from 'react-icons/fa6';
import { SiKubernetes } from 'react-icons/si';

export default function Engineer() {
  let ids = [
    '#txt-1',
    '#txt-2',
    '#txt-3',
    '#txt-4',
    '#txt-5',
    '#txt-6',
    '#txt-7',
    '#txt-8',
    '#txt-9',
    '#txt-10',
    '#txt-11',
    '#txt-12',
    '#txt-13',
  ];

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
    <div className='w-full h-full absolute lowercase text-fuchsia-100 text-2xl font-spaceGrotesk'>
      <div id='txt-1' className='absolute left-[10%]'>
        Sofware Engineer
      </div>
      <div id='txt-2' className='absolute top-[5%] right-[8%]'>
        5+ years experience
      </div>
      <div id='txt-3' className='absolute top-[8%] left-[25%]'>
        Backend
      </div>
      <div id='txt-4' className=' absolute top-[10%] left-[48%] text-6xl'>
        <FaGolang />
      </div>
      <div id='txt-5' className='absolute top-[15%] right-[13%]'>
        Frontend
      </div>
      <div id='txt-6' className='absolute top-[19%] right-[36%] text-5xl'>
        <FaReact />
      </div>
      <div id='txt-7' className='absolute top-[14%] left-[16%]'>
        Cloud
      </div>
      <div id='txt-8' className='absolute top-[21%] left-[24%] text-5xl'>
        <SiKubernetes />
      </div>
      <div id='txt-9' className='absolute top-[25%] left-[38%] text-5xl'>
        <FaAws />
      </div>
      <div id='txt-10' className='absolute top-[26%] right-[21%] text-5xl'>
        <FaDocker />
      </div>
      <div id='txt-11' className='absolute top-[31%] left-[19%] text-5xl'>
        <FaRust />
      </div>
      <div id='txt-12' className='absolute top-[34%] left-[55%]'>
        Cybersecurity
      </div>
    </div>
  );
}
