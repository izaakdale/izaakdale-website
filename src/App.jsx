import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import Engineer from './components/Engineer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let t = gsap.timeline();

      t.from(['#title-1', '#title-2', '#title-3', '#title-4', '#title-5'], {
        opacity: 0,
        y: -30,
        stagger: 0.3,
      })
        .to(['#title-1', '#title-2', '#title-3', '#title-4', '#title-5'], {
          opacity: 0,
          xPercent: '-20',
          stagger: 0.3,
          delay: 0.3,
        })
        .from('#welcome', {
          opacity: 0,
          duration: 1,
        });
    }, comp);

    return () => {
      ctx.revert();
    };
  }, []);

  let ctx = gsap.context();

  return (
    <div className='relative pb-12' ref={comp}>
      <div
        id='intro-slider'
        className='w-full h-screen justify-between absolute top-0 left-0 flex flex-col px-4 py-14 font-spaceGrotesk text-7xl lg:text-9xl text-fuchsia-100 text-left z-10 tracking-tighter'
      >
        <h1 id='title-1'>Engineer</h1>
        <h1 id='title-2'>Designer</h1>
        <h1 id='title-3'>Architect</h1>
        <h1 id='title-4'>Freelancer</h1>
        <h1 id='title-5'>Musician</h1>
      </div>

      <div className='h-screen flex flex-col justify-center place-items-center  font-spaceGrotesk'>
        <h1 id='welcome' className='text-7xl font-bold text-fuchsia-100'>
          Welcome.
        </h1>
        <h2 id='welcome' className='text-fuchsia-100'>
          scroll for more info
        </h2>
      </div>
      <div className='w-full h-[80vh]'>
        <Engineer />
      </div>
      <div className='w-full'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
