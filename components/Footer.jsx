console.log("Début");
setTimeout(() => console.log("Timer"), 1000);
console.log("Fin");


import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            soumia.ouafi11@gmail.com
        </div>
      </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 OS. All rights reserved.</p>
        <ul className="fixed bottom-4 right-4 flex  gap-10  ">
          <li>
            <a
              href="https://github.com/OuafiSoumia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/soumia-ouafi-a66438229/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
            >
              LinkedIn
            </a>
          </li>
        </ul>

    </div>

    </div>
  )
}

export default Footer
