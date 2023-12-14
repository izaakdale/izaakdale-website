import izaakLogo from '/image001.png';
import './App.css';
import { BsGithub, BsLinkedin, BsMedium } from 'react-icons/bs';

function App() {
  return (
    <>
      <div>
        <img src={izaakLogo} className='logo' alt='Vite logo' />
      </div>
      <div>
        <p>Izaak is working hard...</p>
      </div>
      <div className='flex mt-8 text-3xl w-full justify-center space-x-4'>
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
    </>
  );
}

export default App;
