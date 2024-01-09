import gsap from 'gsap';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import {
  FaAws,
  FaDocker,
  FaGithubAlt,
  FaGitlab,
  FaGolang,
  FaLinux,
  FaReact,
} from 'react-icons/fa6';
import {
  SiGrafana,
  SiIstio,
  SiKubernetes,
  SiNewrelic,
  SiPrometheus,
} from 'react-icons/si';

export default function Engineer() {
  let ids = [
    '#swe',
    '#go',
    '#prometheus',
    '#gitlab',
    '#istio',
    '#react',
    '#typescript',
    '#newrelic',
    '#fyears',
    '#backend',
    '#frontend',
    '#github',
    '#grafana',
    '#docker',
    '#k8s',
    '#aws',
    '#cloud',
    '#linux',
    '#cyber',
    '#javascript',
  ];

  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({ repeat: -1, delay: 1 });

      t1.from(ids, {
        opacity: 0,
        y: -30,
        stagger: 0.5,
      }).to(ids, {
        opacity: 0,
        y: 30,
        stagger: 0.05,
        delay: 2,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={comp}
      className='w-full h-full absolute lowercase text-fuchsia-300 md:text-2xl font-spaceGrotesk'
    >
      {/* BackendSection */}
      <div id='swe' className='absolute top-[10%] left-[10%]'>
        Sofware Engineer
      </div>
      <div id='fyears' className='absolute top-[15%] left-[50%]'>
        C & C++
      </div>
      <div id='backend' className='absolute top-[25%] left-[7%]'>
        Backend
      </div>
      <div
        id='go'
        className=' absolute top-[23%] right-[25%] text-5xl md:text-6xl'
      >
        <FaGolang />
      </div>
      <div id='cloud' className='absolute top-[20%] left-[29%]'>
        Cloud
      </div>
      <div
        id='k8s'
        className='absolute top-[32%] left-[24%] text-4xl md:text-5xl'
      >
        <SiKubernetes />
      </div>
      <div
        id='docker'
        className='absolute top-[29%] right-[14%] text-4xl md:text-5xl'
      >
        <FaDocker />
      </div>

      {/* FrontendSection */}
      <div id='frontend' className='absolute top-[10%] right-[13%]'>
        Frontend
      </div>
      <div id='javascript' className='absolute top-[35%] right-[30%]'>
        Javascript
      </div>
      <div id='typescript' className='absolute top-[63%] right-[16%]'>
        Typescript
      </div>
      <div
        id='react'
        className='absolute top-[40%] right-[6%] text-4xl md:text-5xl'
      >
        <FaReact />
      </div>

      {/* DevSecOpsSection */}
      <div
        id='aws'
        className='absolute top-[75%] left-[36%] text-4xl md:text-5xl'
      >
        <FaAws />
      </div>
      <div id='cyber' className='absolute top-[90%] left-[55%]'>
        Cybersecurity
      </div>
      <div
        id='prometheus'
        className='absolute text-4xl md:text-5xl top-[80%] left-[10%]'
      >
        <SiPrometheus />
      </div>
      <div
        id='grafana'
        className='absolute text-4xl md:text-5xl top-[71%] right-[26%]'
      >
        <SiGrafana />
      </div>
      <div
        id='github'
        className='absolute text-4xl md:text-5xl top-[64%] left-[25%]'
      >
        <FaGithubAlt />
      </div>
      <div
        id='gitlab'
        className='absolute text-4xl md:text-5xl top-[80%] right-[12%]'
      >
        <FaGitlab />
      </div>
      <div
        id='linux'
        className='absolute text-4xl md:text-5xl top-[90%] left-[18%]'
      >
        <FaLinux />
      </div>
      <div
        id='newrelic'
        className='absolute text-4xl md:text-5xl top-[75%] right-[38%]'
      >
        <SiNewrelic />
      </div>
      <div
        id='istio'
        className='absolute text-4xl md:text-5xl top-[62%] left-[8%]'
      >
        <SiIstio />
      </div>
    </div>
  );
}
