import React from 'react'

const Main1 = () => {
  return (
    <>
    <div className='w-full phone:w-full phone:h-[65vh] phone:flex phone:flex-col phone:border-b-2 phone:border-white  h-[110vh] flex flex-col border-b-2 border-white bg-gray-400   '   >
    <div className='w-full h-28 z-10 phone:w-full  phone:h-[80px] phone:flex phone:border-b-[1px] phone:border-white  flex border-b-[1px]  border-white   '>
    <div className='w-[30%] phone:w-[20%] phone:h-[80px] phone:flex phone:items-center phone:justify-center h-28 flex items-center justify-center '>
    <h1 className='text-6xl phone:text-2xl font-bold '>Logo</h1>
    </div>
    <div className='w-[70%] h-28 phone:w-[80%] phone:h-[80px] phone:flex phone:items-center phone:justify-evenly  flex items-center justify-evenly   '>
    <span className='text-2xl phone:text-xs text-blue-800 hover:text-black hover:border-b-2 hover:border-teal-300 cursor-pointer hover:-translate-y-2 font-semibold hover:font-semibold hover:scale-75 hover:text-2xl  '>Home</span>
    <a href="#about">
    <span className='text-2xl phone:text-xs text-gray-600 hover:text-black hover:border-b-2 hover:border-teal-300 cursor-pointer hover:-translate-y-2 font-semibold hover:font-semibold hover:scale-75 hover:text-2xl  '>About</span></a>
    <a href="#contact">
    <span className='text-2xl phone:text-xs text-gray-600 hover:text-black hover:border-b-2 hover:border-teal-300 cursor-pointer hover:-translate-y-2 font-semibold hover:font-semibold hover:scale-75 hover:text-2xl  '>Contact</span></a>
    <a href="#service">
    <span className='text-2xl phone:text-xs text-gray-600 hover:text-black hover:border-b-2 hover:border-teal-300 cursor-pointer hover:-translate-y-2 font-semibold hover:font-semibold hover:scale-75 hover:text-2xl  '>Service</span></a>
    <a href="#pricing">
    <span className='text-2xl phone:text-xs text-gray-600 hover:text-black hover:border-b-2 hover:border-teal-300 cursor-pointer hover:-translate-y-2 font-semibold hover:font-semibold hover:scale-75 hover:text-2xl  '>Pricing</span></a>
    </div>
    </div>
    <div className='w-full phone:w-full phone:h-[55vh]  phone:flex phone:flex-col-reverse phone:items-center phone:justify-center h-[90vh] z-10  flex '>
    <div className='w-1/2 phone:w-1/2 phone:h-[20vh]  phone:pl-0 phone:mt-0  h-[50vh] mt-[17%] items-center pl-[100px] justify-center '>
    <span className='w-[90%] phone:w-[90%] phone:h-[30px]  h-[100px]  flex'>
    <h1 className=' font-bold text-7xl phone:text-xl '>Best</h1>
<marquee behavior="" direction="right">    <h1 className='text-pink-600 phone:text-xl  font-bold text-7xl'>Frontend</h1></marquee>
    </span>
    <h1 className='text-6xl font-bold text-pink-600 phone:text-xl     '>Web Development</h1>
    <h1 className='text-6xl phone:text-xl font-bold'>Technologies</h1>
    </div>
    <div className='w-1/2 phone:w-1/2 phone:h-[30vh] h-[90vh]  flex items-center justify-center '>
    <img className='w-[90%] h-[85vh] phone:w-full  phone:h-[30vh] ' src="https://www.cdmi.in/courses@2x/web-developments.webp" alt="" />

    </div>
    </div>
    </div>
    <div id='about' className='w-full phone:flex phone:flex-col phone:w-full phone:h-[130vh] phone:border-b-2 phone:border-white h-[130vh] border-b-2 border-white bg-slate-400 '>
    <div className='w-full phone:w-full phone:h-[50px] h-[100px] phone:flex phone:flex-col phone:items-center phone:justify-center flex flex-col items-center justify-center  '>
<h1 className='phone:text-xl font-bold text-5xl '>About Us</h1>
    <h1 className='text-5xl phone:text-xl '>How website design About works</h1>
    </div>
    <div className='w-full h-[100vh] phone:w-full phone:h-[126vh] phone:gap-1   phone:flex phone:flex-col phone:items-center phone:justify-center   flex items-center justify-evenly  '>
    <div className='w-[30%] phone:w-[80%] phone:h-[250px]  phone:flex phone:flex-col phone:items-center  h-[500px]  flex flex-col items-center '>
    <img className='w[80%] h-80 phone:w-[70%] phone:h-[100px]  ' src="https://cdn1.designhill.com/assets/dh/images/work-one.png" alt="" />
    <h1 className='text-2xl phone:text-base font-semibold '>Fill out your design brief and post a</h1>
    <h1 className='text-2xl phone:text-base font-semibold '>project</h1>
    <span className='text-lg text-slate-100 phone:text-[14px] font-medium'>Describe your business, answer a few simple</span>
    <span className='text-lg text-slate-100 phone:text-[14px] font-medium'>questions and choose how much you'd like to</span>
    <span className='text-lg text-slate-100 phone:text-[14px] font-medium'>pay.</span>
    </div>
    <div className='w-[30%] phone:w-[80%] phone:h-[250px]  phone:flex phone:flex-col phone:items-center h-[500px]  flex flex-col items-center ju '>
    <img className='w[80%] h-80 phone:w-[70%] phone:h-[100px]  ' src="https://cdn1.designhill.com/assets/dh/images/work-two.png" alt="" />
    <h1 className='text-2xl phone:text-base font-semibold '>Dozens of designers compete for</h1>
    <h1 className='text-2xl phone:text-base font-semibold '>your business</h1>
    <span className='text-lg text-slate-100 phone:text-[13.5px] font-medium'>Receive Dozens of designs made exclusively for</span>
    <span className='text-lg text-slate-100 phone:text-[13.5px] font-medium'>you, provide feedback and get as many revisions</span>
    <span className='text-lg text-slate-100 phone:text-[14px] font-medium'> as you want.</span>
    </div>
    <div className='w-[30%] phone:w-[80%] phone:h-[250px]  phone:flex phone:flex-col phone:items-center h-[500px]  flex flex-col items-center ju '>
    <img className='w[80%] h-80 phone:w-[70%] phone:h-[100px]  ' src="https://cdn1.designhill.com/assets/dh/images/work-three.png" alt="" />
    <h1 className='text-2xl phone:text-base font-semibold '>Pick the favorite, get complete</h1>
    <h1 className='text-2xl phone:text-base font-semibold '>ownership and download high</h1>
    <h1 className='text-2xl phone:text-base font-semibold '>quality files</h1>
    <span className='text-lg text-slate-100 phone:text-[14px] font-medium'>Choose the design you love the most, get all</span>
    <span className='text-lg text-slate-100 phone:text-[14px] font-medium'>source files and complete copyright and</span>
    <span className='text-lg text-slate-100 phone:text-[14px] font-medium'>wnership of the design.</span>
    </div>
    </div>
    <div className='w-full h-[60px] phone:flex phone:w-full phone:h-[60px] phone:items-center phone:justify-center  flex items-center justify-center '>
    <button className='w-[25%] h-[55px] phone:w-[40%] phone:h-[50px] phone:text-[14px] phone:hover:bg-black phone:hover:shadow-sm phone:hover:shadow-white bg-green-500 rounded-full hover:-translate-y-2 text-white text-2xl font-semibold hover:bg-black hover:shadow-sm hover:shadow-white '>
    <a href="https://about1.vercel.app/"> GET STARTED NOW</a></button>
    </div>
    </div>
    <div id='contact' className='w-full phone:flex phone:w-full phone:h-[90vh]  h-[70vh] border-b-2 border-white bg-slate-400 flex flex-col  '>


    <div className='w-full h-[150px] phone:w-full phone:h-[15vh]  phone:flex phone:flex-col phone:items-center phone:justify-center  flex flex-col items-center justify-center '>
    <h1 className='text-5xl phone:text-2xl font-bold '>Contact us </h1>
    <span className='text-xl phone:text-[13.8px]  font-medium'>A Good idiom for kids is "it's raining cats and dogs." Kids  </span>
    <span className='text-xl phone:text-[13.8px] font-medium'>Early age so they can understand it's </span>
    </div>
    <div className='w-full h-screen phone:w-full phone:h-[68vh] phone:flex phone:pt-4 phone:flex-col phone:gap-1 phone:items-center phone:justify-evenly animate-pulse  flex items-center justify-evenly '>
    <div className='w-[28%] phone:w-[50%] phone:h-[150px]  h-[220px] border-2 border-slate-900 rounded-2xl flex flex-col items-center justify-evenly '>
    <span className='w-16 h-16 phone:w-12 phone:h-12 bg-neutral-600 rounded-full flex items-center justify-center phone:text-xl text-3xl  '>
    <a href="https://contact-seven-sigma.vercel.app/">
    <i className="fa-solid fa-phone text-orange-700 "></i></a>
    </span>
    <h1 className=' text-3xl phone:text-xl  font-bold ' >Phone</h1>
    <p className=' text-2xl phone:text-lg  '>(007)095-6890 </p>
    </div>
    <div className='w-[28%] phone:w-[50%] phone:h-[150px] h-[220px] border-2 border-slate-900 rounded-2xl flex flex-col items-center justify-evenly '>
    <span className='w-16 h-16 phone:w-12 phone:h-12 bg-neutral-600 rounded-full flex items-center justify-center phone:text-xl text-3xl '>
    <a href="https://contact-seven-sigma.vercel.app/">
    <i class="fa-solid fa-envelope text-orange-700 " ></i></a>
    </span>
    <h1 className=' text-3xl phone:text-xl  font-bold ' >Email</h1>
    <p className=' text-2xl phone:text-lg  '>username@gmail.com</p>
    </div>
    <div className='w-[28%] phone:w-[50%] phone:h-[150px] phone:gap-1 h-[220px] border-2 border-slate-900 rounded-2xl flex flex-col items-center justify-center gap-3 '>
    <span className='w-16 h-16 phone:w-12 phone:h-12 bg-neutral-600 rounded-full flex items-center justify-center phone:text-xl text-3xl '>
    <a href="https://contact-seven-sigma.vercel.app/">
    <i class="fa-solid fa-location-dot text-orange-700 "></i></a>
    </span>
    <h1 className='text-3xl phone:text-xl  font-bold'>Address</h1>
    <p className='phone:text-[15px] '>13420-Oak Street, New </p>
    <p className='phone:text-[15px] '>York City(9134200) </p>
    </div>
    </div>
    </div>
    <div id='service' className='w-full phone:w-full phone:h-[110vh] phone:flex phone:flex-col  h-[100vh] border-b-2 border-white bg-slate-400 flex flex-col '>
      <div className='w-full phone:w-full phone:h-[60px] phone:flex phone:items-center phone:justify-center  h-[100px] flex items-center justify-center  '>
        <h1 className='text-5xl phone:text-2xl font-bold'> Our Serives</h1>
      </div>
      <div className='w-full h-[90vh] phone:w-full phone:h-[90vh]  phone:flex phone:flex-wrap phone:items-center phone:justify-evenly  flex flex-wrap items-center justify-evenly  '>
      <div className='w-[27%] phone:w-[40%] phone:h-[180px] phone:hover:bg-red-200 phone:cursor-pointer phone:flex phone:items-center phone:justify-center phone:hover:w-[41%] phone:hover:h-[182px] phone:hover:opacity-70  h-[220px] hover:bg-red-200 cursor-pointer hover:w-[28%] hover:h-[225px] hover:opacity-70 bg-white shadow-lg shadow-black rounded-2xl flex flex-col items-center justify-center  '>
      <i class="fa-solid fa-signal text-4xl phone:text-2xl hover:text-emerald-700  text-orange-500  "></i>
      <h1 className='text-2xl phone:text-[12px] font-bold'>Marketing Services</h1>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>Aliquam ut turpis nec ante</span>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>pharetra ornare. Integer ac ex  </span>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>nisl eleifend dapibus nec quis .</span>
      </div>
      <div className='w-[27%] h-[220px] phone:w-[40%] phone:h-[180px] phone:hover:bg-red-200 phone:cursor-pointer phone:flex phone:items-center phone:justify-center phone:hover:w-[41%] phone:hover:h-[182px] phone:hover:opacity-70 hover:bg-red-200 cursor-pointer hover:w-[28%] hover:h-[225px] hover:opacity-70 bg-white shadow-lg shadow-black rounded-2xl flex flex-col items-center justify-center  '>
      <i class="fa-solid fa-laptop text-4xl phone:text-2xl hover:text-emerald-700  text-orange-500 "></i>
      <h1 className='text-2xl phone:text-[12px] font-bold'>Web App</h1>
      <h1 className='text-2xl phone:text-[12px] font-bold'>Development</h1>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>Aliquam ut turpis nec ante</span>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>pharetra ornare. Integer ac ex  </span>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>nisl eleifend dapibus nec quis .</span>
      </div>
      <div className='w-[27%] h-[220px] phone:w-[40%] phone:h-[180px] phone:hover:bg-red-200 phone:cursor-pointer phone:flex phone:items-center phone:justify-center phone:hover:w-[41%] phone:hover:h-[182px] phone:hover:opacity-70 hover:bg-red-200 cursor-pointer hover:w-[28%] hover:h-[225px] hover:opacity-70 bg-white shadow-lg shadow-black rounded-2xl flex flex-col items-center justify-center  '>
      <i class="fa-solid fa-chart-line text-4xl phone:text-2xl hover:text-emerald-700  text-orange-500 "></i>
      <h1 className='text-2xl phone:text-[12px] font-bold'>24/7 Call Center</h1>
      <h1 className='text-2xl phone:text-[12px] font-bold'>Service</h1>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>Aliquam ut turpis nec ante</span>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>pharetra ornare. Integer ac ex </span>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>nisl eleifend dapibus nec quis .</span>
      </div>
      <div className='w-[27%] h-[220px] phone:w-[40%] phone:h-[180px] phone:hover:bg-red-200 phone:cursor-pointer phone:flex phone:items-center phone:justify-center phone:hover:w-[41%] phone:hover:h-[182px] phone:hover:opacity-70 hover:bg-red-200 cursor-pointer hover:w-[28%] hover:h-[225px] hover:opacity-70 bg-white shadow-lg shadow-black rounded-2xl flex flex-col items-center justify-center  '>
      <i class="fa-solid fa-envelope-circle-check text-4xl phone:text-2xl hover:text-emerald-700  text-orange-500  "></i>
      <h1 className='text-2x lphone:text-[12px] font-bold'>Social Media</h1>
      <h1 className='text-2x lphone:text-[12px] font-bold'>Marketing</h1>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>Aliquam ut turpis nec ante</span>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>pharetra ornare. Integer ac ex  </span>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>nisl eleifend dapibus nec quis .</span>
      </div>
      <div className='w-[27%] h-[220px] phone:w-[40%] phone:h-[180px] phone:hover:bg-red-200 phone:cursor-pointer phone:flex phone:items-center phone:justify-center phone:hover:w-[41%] phone:hover:h-[182px] phone:hover:opacity-70 hover:bg-red-200 cursor-pointer hover:w-[28%] hover:h-[225px] hover:opacity-70 bg-white shadow-lg shadow-black rounded-2xl flex flex-col items-center justify-center  '>
      <i class="fa-solid fa-signal text-4xl phone:text-2xl hover:text-emerald-700  text-orange-500  "></i>
      <h1 className='text-2xl phone:text-[12px] font-bold'>Corporate Business</h1>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>Aliquam ut turpis nec ante</span>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>pharetra ornare. Integer ac ex </span>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>nisl eleifend dapibus nec quis .</span>
      </div>
      <div className='w-[27%] h-[220px] phone:w-[40%] phone:h-[180px] phone:hover:bg-red-200 phone:cursor-pointer phone:flex phone:items-center phone:justify-center phone:hover:w-[41%] phone:hover:h-[182px] phone:hover:opacity-70 hover:bg-red-200 cursor-pointer hover:w-[28%] hover:h-[225px] hover:opacity-70 bg-white shadow-lg shadow-black rounded-2xl flex flex-col items-center justify-center  '>
      <i class="fa-solid fa-pen text-4xl phone:text-2xl hover:text-emerald-700  text-orange-500  "></i>
      <h1 className='text-2xl phone:text-[12px]  font-bold'>Creative Consulitancy</h1>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>Aliquam ut turpis nec ante</span>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>pharetra ornare. Integer ac ex </span>
      <span className=' text-xl phone:text-[10px] text-slate-500  '>nisl eleifend dapibus nec quis .</span>
      </div>
      </div>
      <div className='w-full h-[100px] phone:w-full phone:h-[60px]  phone:items-center phone:justify-center flex items-center justify-center '>

<button className='w-[25%] phone:w-[35%] phone:h-[50px] phone:text-xl h-[60px] bg-green-500 rounded-2xl text-3xl font-bold text-white cursor-pointer hover:-translate-y-2 hover:bg-black hover:shadow-sm hover:shadow-white  ' > <a href="https://services-pink.vercel.app/"> Open Service </a>
 </button>
      </div>
    </div>
    <div id='pricing' className='w-full phone:flex h-[70vh] bg-slate-400 flex flex-col items-center justify-center  '>
    <div className='w-full h-[20vh] flex items-center justify-center text-5xl  font-bold '><h1>Pricing</h1></div>
    
    <div class="w-full p-4 text-center  border-gray-200 rounded-lg shadow sm:p-8  dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p>
    <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
    <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
    <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
    <div class="text-left">
    <div class="mb-1 text-xs">Download on the</div>
    <div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
    </div>
    </a>
    <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
    <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
    <div class="text-left">
    <div class="mb-1 text-xs">Get in on</div>
    <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
    </div>
    </a>
    </div>
    </div>
    
    </div>
    
    <div class="w-full h-[50vh] bg-slate-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div class="md:flex md:justify-between">
    <div class="mb-6 md:mb-0">
    <a href="https://flowbite.com/" class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Website</span>
    </a>
    </div>
    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
    <div>
    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
    <ul class="text-gray-500 dark:text-gray-400 font-medium">
    <li class="mb-4">
    <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
    </li>
    <li>
    <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
    </li>
    </ul>
    </div>
    <div>
    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
    <ul class="text-gray-500 dark:text-gray-400 font-medium">
    <li class="mb-4">
    <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
    </li>
    <li>
    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
    </li>
    </ul>
    </div>
    <div>
    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
    <ul class="text-gray-500 dark:text-gray-400 font-medium">
    <li class="mb-4">
    <a href="#" class="hover:underline">Privacy Policy</a>
    </li>
    <li>
    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
    </li>
    </ul>
    </div>
    </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
    <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525805031%7Cb%7Cface%20book%7C&placement=&creative=550525805031&keyword=face%20book&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221112%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-271614059%26loc_physical_ms%3D1007768%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwtamlBhD3ARIsAARoaEwLerh3GNVKpAD1295EtNOQml0fgKMhXcUOyBMMY6kx4r_eRkMmuukaAtcoEALw_wcB" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
    </svg>
    <span class="sr-only">Facebook page</span>
    </a>
    <a href="https://www.epicgames.com/id/login/epic" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
    </svg>
    <span class="sr-only">Discord community</span>
    </a>
    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den" class="text-gray-500 hover:text-zinc-300 ">
    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
    </svg>
    <span class="sr-only">Twitter page</span>
    </a>
    <a href="" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
    </svg>
    <span class="sr-only">GitHub account</span>
    </a>
    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
    </svg>
    <span class="sr-only">Dribbble account</span>
    </a>
    </div>
    </div>
    </div>
    </div>
    </>
    )
  }
  
  export default Main1
  
  