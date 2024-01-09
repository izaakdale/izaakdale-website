import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import Engineer from '../components/Engineer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const navigate = useNavigate();

  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let t = gsap.timeline();

      t.from('#welcome', {
        opacity: 0,
        duration: 1,
        delay: 0.3,
      });
    }, comp);

    return () => {
      ctx.revert();
    };
  }, []);

  let ctx = gsap.context();

  return (
    <div className='relative' ref={comp}>
      <div className='h-screen flex flex-col justify-center place-items-center font-spaceGrotesk text-fuchsia-100'>
        <h1 id='welcome' className='text-7xl font-bold'>
          Izaak Dale.
        </h1>
        <h2 id='welcome' className=''>
          full stack software development engineer
        </h2>
        <div id='welcome' className='flex space-x-12 mt-6'>
          <button
            onClick={() => {
              navigate('/contact');
            }}
            className='w-24 p-2 border-[1px] rounded hover:bg-fuchsia-300 hover:cursor-pointer hover:text-gray-950 transition-colors ease-in-out z-50'
          >
            contact
          </button>
          <button
            onClick={() => {
              navigate('/about');
            }}
            className='w-24 p-2 border-[1px] rounded hover:bg-fuchsia-300 hover:cursor-pointer hover:text-gray-950 transition-colors ease-in-out z-50'
          >
            about
          </button>
        </div>
        <div className='w-full h-screen absolute'>
          <Engineer />
        </div>
      </div>
    </div>
  );
}

export default Home;
