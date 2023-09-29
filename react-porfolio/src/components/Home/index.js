import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders'

import LogoTitle from '../../assets/images/henryy.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetter'; // Assuming this import is correct
import Logo from './Logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['e', 'n', 'r', 'i', 'c', 'h', 'y'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt='Developer' /> {/* Provide a more descriptive alt text */}
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
        </h1>
        <h2>
          Frontend Developer | Javascript Developer | Backend Developer <br />
          Video Editor | Graphics Designer
        </h2>
        <Link to='/contact' className='flat-button'>
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>

    <Loader type="pacman" />
    </>
  );
};

export default Home;

