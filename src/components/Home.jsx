import React, { useState, useEffect } from 'react';
import { CgDarkMode } from 'react-icons/cg';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [rotation, setRotation] = useState(0);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    setRotation(rotation + 180);
  };

  useEffect(() => {
    const container = document.querySelector('.container');
    const darkModeIcon = document.querySelector('.dark-mode-icon');

    if (darkMode) {
      container.style.backgroundColor = 'black';
      container.style.color = 'white';
    } else {
      container.style.backgroundColor = 'white';
      container.style.color = 'black';
    }

    darkModeIcon.style.transform = `rotate(${rotation}deg)`;
    darkModeIcon.style.transition = 'transform 500ms';
  }, [darkMode, rotation]);

  return (
    <body className='h-screen w-full'>
      {/* Container */}
    <div className='z-1 p-6 w-full h-full flex justify-center items-center'>
      <div className='container w-full h-full flex items-center justify-center text-center rounded-xl border-4 border-red-100'>
        <div className='absolute top-[10%]'>
          <div className='w-auto h-auto p-2 rounded-full border-2 items-center justify-center flex' onClick={toggleTheme}>
            <CgDarkMode size={30} className='dark-mode-icon' />
          </div>
        </div>

        <div className='w-[400px] h-[200px] rounded-xl border-4 font-mono'>
          <div>
            <p className='py-4 text-xl border-b-2'>Lorem Ipsum</p>
          </div>
          <p className='py-4 mx-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, mi a eleifend viverra, nibh mauris
            elementum libero.
          </p>
        </div>
      </div>
    </div>
     
    </body>
  );
};

export default Home;
