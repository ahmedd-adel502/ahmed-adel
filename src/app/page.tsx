'use client'
import { faBootstrap, faCss, faCss3Alt, faDev, faGit, faGithub, faHtml5, faJs, faLinkedin, faReact, faSass, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import Typed from "typed.js";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import profileImg from "../../assets/profile.jpeg"
import { faCss3 } from "@fortawesome/free-brands-svg-icons/faCss3";
import tailwindIcon from "../../assets/tailwind-svgrepo-com.svg"
import nextIcon from "../../assets/next.js-w76wb14xjaofqmirzwub.webp"
import reduxIcon from "../../assets/redux.svg"
import { faArrowDown, faMobile, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import typeScript from "../../assets/typescript.svg"
import freshCart from "../../assets/freshCart.png"
import fokir from "../../assets/Fokir.png"
import DevFolio from "../../assets/DevFolio.png"
import bootstrapTest from "../../assets/BoostrapTest.png"
import bakery from "../../assets/Bakery.png"
import mealify from "../../assets/Mealify.png"
import yummy from "../../assets/Yummy.png"
import loginApp from "../../assets/LoginApp.png"
import WeatherApp from "../../assets/WeatherApp.png"
import gridMaster from "../../assets/GridMaster.png"
import bookMarker from "../../assets/BookMarker.png"
import FrameWork from "../../assets/FrameWork.png"
import QuotesApp from "../../assets/Quotes.png"
export default function page(){


    const el = React.useRef(null);

      React.useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Frontend Developer.', 'React Developer.', 'Next.js Developer.'],
          typeSpeed: 50,
          loop:true,
          backSpeed: 15,
        });

        return () => {
          typed.destroy();
        };
      }, []);

      React.useEffect(() => {
        function handleScroll(){
          const footer = document.querySelector('footer');
          const navbar = document.querySelector('.navbar');
          if(window.scrollY === 0){
            footer?.classList.add('bg-gray-800','text-white','dark:bg-black');
            navbar?.classList.add('bg-gray-800','text-white','dark:bg-black');
          }else{
            footer?.classList.remove('bg-gray-800','text-white','dark:bg-black');
            navbar?.classList.remove('bg-gray-800','text-white','dark:bg-black');
            footer?.classList.add('text-black');
            navbar?.classList.add('text-black');
          }
        }
        window.addEventListener('scroll',handleScroll);
        return () => {
          window.removeEventListener('scroll',handleScroll);
        }
      }, [scroll]);

      React.useEffect(() => {
        const homeContent = document.querySelector('.home-content');
        const image = document.querySelector('.image');
        setTimeout(() => {
          homeContent?.classList.replace('translate-x-[-1200px]','translate-x-0');
          image?.classList.replace('translate-x-[1200px]','translate-x-0');
        }, 500);
      },[])

       React.useEffect(() => {
        AOS.init({
          duration: 800,
          once: false,    
        });
      }, []);
  
      const [activeTab, setActiveTab] = React.useState('all')
        React.useEffect(() => {
        AOS.refresh();
      }, [activeTab]);
      

      const [open, setOpen] = React.useState(false);



  return <>
    

    {/* Main */}
    <div className="stars" id="stars"></div>
    <div className="bg-gray-500/50 dark:bg-black/95 main z-10 relative">
      <div className="container mx-auto text-white py-25 flex items-center justify-around min-h-screen" id="home">
        <div className="flex flex-col gap-2 space-y-5 bg-gray-800 p-5 rounded-lg shadow-lg w-[50%] home-content translate-x-[-1200px] transition-transform duration-700">
          <div className="space-y-2">
            <span className="font-bold">Hi , it's Me</span>
            <h1 className="text-3xl font-bold">I'm <strong className="text-violet-500 dark:text-blue-400">Ahmed</strong> Adel</h1>
            <h2 className="text-2xl font-bold">I'm a <span className="text-2xl font-bold text-violet-500 dark:text-blue-400" ref={el}></span></h2>
          </div>
            <p className="text-gray-300 max-w-lg">I am a frontend developer with experience in building web applications using modern technologies such as React, Next.js, and Tailwind CSS. I am passionate about creating beautiful and functional user interfaces that provide a great user experience.</p>
            <ul className="flex items-center gap-4  text-5xl">
              <li><a href="https://www.linkedin.com/in/ahmed-adell-7b366b1a3/" target="_blank"><FontAwesomeIcon className="hover:text-violet-400 dark:hover:text-blue-400 hover:drop-shadow-[0_0_10px_violet] dark:hover:drop-shadow-[0_0_10px_skyblue]" icon={faLinkedin} /></a></li>
              <li><a href="https://github.com/ahmedd-adel502" target="_blank"><FontAwesomeIcon className="hover:text-violet-400 dark:hover:text-blue-400 hover:drop-shadow-[0_0_10px_violet] dark:hover:drop-shadow-[0_0_10px_skyblue]" icon={faGithub} /></a></li>
            </ul>
            <div className="flex items-center gap-2 w-full">
              <button onClick={() => window.location.href="#projects"} className="btn flex-grow-1 cursor-pointer bg-transparent border-2 hover:bg-violet-600 hover:border-violet-600 drop-shadow-[0_0_50px_violet] dark:hover:bg-blue-400 dark:hover:border-blue-400 dark:hover:drop-shadow-[0_0_50px_skyblue] ">View Projects</button> 
              <button onClick={() => window.location.href="#contact"} className="btn flex-grow-1 cursor-pointer bg-violet-600 border-2 border-violet-600 hover:bg-violet-700 dark:bg-blue-400 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:border-blue-500 drop-shadow-[0_0_50px_violet] dark:drop-shadow-[0_0_50px_skyblue]">Contact Me</button>
            </div>
        </div>
        <div className="relative image translate-x-[1200px] transition-transform duration-700">
          <Image src={profileImg} alt="profile image" className="w-110 h-110 object-cover rounded-full border-4 border-violet-500 dark:border-blue-400 hover:drop-shadow-[0_0_50px_violet] dark:hover:drop-shadow-[0_0_50px_skyblue] transition-shadow duration-300"/>
        </div>
      </div>

      {/* about */}
      <div className="container mx-auto text-white py-25 flex items-center justify-around min-h-screen" id="about">
          <div data-aos="fade-right" data-aos-delay="400">
            <div className={`bg-gray-800 p-5 rounded-lg shadow-lg transition-all duration-[2000ms] overflow-hidden ${open ? 'max-h-[2000px]' : 'max-h-[80px]'}`}>
              <div className="flex items-center justify-between">
                <span className='text-lg font-bold inline-block w-fit bg-violet-600 dark:bg-blue-400 p-2 rounded-md'>About Me</span>
                <span onClick={()=>setOpen(!open)} className="cursor-pointer bg-violet-500 dark:bg-blue-400 p-2 rounded-full h-[50px] w-[50px] flex items-center justify-center animate-bounce"><FontAwesomeIcon className={`text-3xl text-white transition-transform duration-[1000ms] ${open ? 'rotate-180' : ''}`} icon={faArrowDown} /></span>
              </div>
                <p className='mt-10 text-lg text-gray-300 max-w-3xl'>Hello! I'm <strong>Ahmed Adel</strong>, a passionate frontend developer with a knack for creating engaging and user-friendly web experiences. With a strong foundation in <strong className='text-orange-400'>HTML</strong>, <strong className='text-blue-400'>CSS</strong>, and <strong className='text-yellow-400'>JavaScript</strong>, I specialize in building responsive and dynamic websites using modern frameworks like <strong className='text-violet-400'>React</strong> and <strong className='text-sky-400'>Next.js</strong>. I love turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you can find me exploring the latest tech trends or working on personal projects to sharpen my skills. Let's connect and create something amazing together!</p>
                <p className='text-xl font-bold mt-5 text-sky-200 flex items-center gap-2'><span className='bg-violet-600 dark:bg-blue-400 size-2 rounded-full inline-block'></span>Certified Diploma in Front-End Web Development from Route IT Training Center</p>
                <ul className='flex items-center gap-2 text-5xl mt-10 w-[50%] mx-auto justify-center'>
                  <li><FontAwesomeIcon className="text-orange-400 cursor-pointer drop-shadow-[0_0_10px_violet] dark:drop-shadow-[0_0_10px_skyblue] slide-Y " icon={faHtml5} /></li>
                  <li><FontAwesomeIcon className="text-sky-400 cursor-pointer drop-shadow-[0_0_10px_violet] dark:drop-shadow-[0_0_10px_skyblue] flip " icon={faCss3} /></li>
                  <li><FontAwesomeIcon className="text-yellow-400 cursor-pointer drop-shadow-[0_0_10px_violet] dark:drop-shadow-[0_0_10px_skyblue] animate-pulse" icon={faJs} /></li>
                  <li><FontAwesomeIcon className="text-violet-400 cursor-pointer drop-shadow-[0_0_10px_violet] dark:drop-shadow-[0_0_10px_skyblue] full-rotate" icon={faReact} /></li>
                  <li><FontAwesomeIcon className="text-white cursor-pointer drop-shadow-[0_0_10px_violet] dark:drop-shadow-[0_0_10px_skyblue] icon" icon={faGithub} /></li>
                </ul>
                <a href="https://dso8.raed.net:455/files/Ahmed-Adel-1.pdf" target="_blank" className="text-center mt-5 btn cursor-pointer bg-transparent border-2 border-violet-600 hover:bg-violet-700 drop-shadow-[0_0_50px_violet] w-[50%] mx-auto block dark:border-blue-400 dark:hover:bg-blue-500 dark:drop-shadow-[0_0_50px_skyblue]">Download CV</a>
           </div>
          </div>

           <div data-aos="fade-left" data-aos-delay="400">
              <div className="relative">
              <Image src={profileImg} alt="profile image" className="w-110 h-110 object-cover rounded-full border-4 border-violet-500 dark:border-blue-400 hover:drop-shadow-[0_0_50px_skyblue] transition-shadow duration-300"/>
            </div>
           </div>
      </div>

      {/* Skills */}
      <div className="container mx-auto text-white py-25 min-h-screen" id="skills">
        <h2 className="font-bold text-5xl mx-auto text-violet-500 dark:text-blue-400 w-fit relative after:absolute after:bottom-[-12px] after:left-0 after:w-full after:h-[6px] after:bg-violet-500 dark:after:bg-blue-400 after:rounded-md">My Skills</h2>
        <div className="grid grid-cols-3 mt-20 gap-10 flex-wrap">
          <div data-aos="fade-up" data-aos-delay="0">
              <div className="skill-card hover:scale-105 bg-gray-800 p-5 rounded-lg shadow-lg hover:drop-shadow-[0_0_10px_black] transition-all duration-200 relative overflow-hidden pl-[80px]">
              <FontAwesomeIcon className="text-orange-500 text-5xl absolute left-2 top-1/2 -translate-y-1/2" icon={faHtml5} />
              <h3 className="text-2xl font-bold mb-1">HTML</h3>
            <div className="absolute bottom-2.5 left-[80px] w-[80%] h-[10px] bg-violet-600 dark:bg-blue-400 rounded-lg"></div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <div className="skill-card hover:scale-105 bg-gray-800 p-5 rounded-lg shadow-lg hover:drop-shadow-[0_0_10px_black] transition-all duration-200 relative overflow-hidden pl-[80px]">
            <FontAwesomeIcon className="text-blue-500 text-5xl absolute left-2 top-1/2 -translate-y-1/2" icon={faCss} />
            <h3 className="text-2xl font-bold mb-1">CSS</h3>
            <div className="absolute bottom-2.5 left-[80px] w-[80%] h-[10px] bg-violet-600 dark:bg-blue-400 rounded-lg"></div>
          </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
                <div className="skill-card hover:scale-105 bg-gray-800 p-5 rounded-lg shadow-lg hover:drop-shadow-[0_0_10px_black] transition-all duration-200 relative overflow-hidden pl-[80px]">
                <FontAwesomeIcon className="text-yellow-500 text-5xl absolute left-2 top-1/2 -translate-y-1/2" icon={faJs} />
                <h3 className="text-2xl font-bold mb-1">Js</h3>
              <div className="absolute bottom-2.5 left-[80px] w-[80%] h-[10px] bg-violet-600 dark:bg-blue-400 rounded-lg"></div>
              </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <div className="skill-card hover:scale-105 bg-gray-800 p-5 rounded-lg shadow-lg hover:drop-shadow-[0_0_10px_black] transition-all duration-200 relative overflow-hidden pl-[80px]">
            <FontAwesomeIcon className="text-violet-500 text-5xl absolute left-2 top-1/2 -translate-y-1/2" icon={faBootstrap} />
            <h3 className="text-2xl font-bold mb-1">Bootstrap</h3>
          <div className="absolute bottom-2.5 left-[80px] w-[80%] h-[10px] bg-violet-600 dark:bg-blue-400 rounded-lg"></div>
          </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
              <div className="skill-card hover:scale-105 bg-gray-800 p-5 rounded-lg shadow-lg hover:drop-shadow-[0_0_10px_black] transition-all duration-200 relative overflow-hidden pl-[80px]">
              <FontAwesomeIcon className="text-sky-500 text-5xl absolute left-2 top-1/2 -translate-y-1/2" icon={faReact} />
              <h3 className="text-2xl font-bold mb-1">React.js</h3>
            <div className="absolute bottom-2.5 left-[80px] w-[80%] h-[10px] bg-violet-600 dark:bg-blue-400 rounded-lg"></div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="500">
                <div className="skill-card hover:scale-105 bg-gray-800 p-5 rounded-lg shadow-lg hover:drop-shadow-[0_0_10px_black] transition-all duration-200 relative overflow-hidden pl-[80px]">
                <Image src={tailwindIcon} alt="tailwind css" className="w-12 h-12 absolute left-2 top-1/2 -translate-y-1/2" />
                <h3 className="text-2xl font-bold mb-1">Tailwind.CSS</h3>
              <div className="absolute bottom-2.5 left-[80px] w-[80%] h-[10px] bg-violet-600 dark:bg-blue-400 rounded-lg"></div>
              </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="600">
              <div className="skill-card hover:scale-105 bg-gray-800 p-5 rounded-lg shadow-lg hover:drop-shadow-[0_0_10px_black] transition-all duration-200 relative overflow-hidden pl-[80px]">
            <Image src={nextIcon} alt="next js" className="w-12 h-12 absolute left-2 top-1/2 -translate-y-1/2" />
            <h3 className="text-2xl font-bold mb-1">Next.js</h3>
          <div className="absolute bottom-2.5 left-[80px] w-[80%] h-[10px] bg-violet-600 dark:bg-blue-400 rounded-lg"></div>
          </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="700">
            <div className="skill-card hover:scale-105 bg-gray-800 p-5 rounded-lg shadow-lg hover:drop-shadow-[0_0_10px_black] transition-all duration-200 relative overflow-hidden pl-[80px]">
            <FontAwesomeIcon className="text-pink-500 text-5xl absolute left-2 top-1/2 -translate-y-1/2" icon={faSass} />
            <h3 className="text-2xl font-bold mb-1">Sass</h3>
          <div className="absolute bottom-2.5 left-[80px] w-[70%] h-[10px] bg-violet-600 dark:bg-blue-400 rounded-lg"></div>
          </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="800">
            <div className="skill-card hover:scale-105 bg-gray-800 p-5 rounded-lg shadow-lg hover:drop-shadow-[0_0_10px_black] transition-all duration-200 relative overflow-hidden pl-[80px]">
            <Image src={reduxIcon} alt="redux" className="w-12 h-12 absolute left-2 top-1/2 -translate-y-1/2" />
            <h3 className="text-2xl font-bold mb-1">Redux</h3>
          <div className="absolute bottom-2.5 left-[80px] w-[75%] h-[10px] bg-violet-600 dark:bg-blue-400  rounded-lg"></div>
          </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="900">
            <div className="skill-card hover:scale-105 bg-gray-800 p-5 rounded-lg shadow-lg hover:drop-shadow-[0_0_10px_black] transition-all duration-200 relative overflow-hidden pl-[80px]">
            <FontAwesomeIcon className="text-blue-500 text-5xl absolute left-2 top-1/2 -translate-y-1/2" icon={faShareNodes} />
            <h3 className="text-2xl font-bold mb-1">Rest APIs</h3>
          <div className="absolute bottom-2.5 left-[80px] w-[75%] h-[10px] bg-violet-600 dark:bg-blue-400 rounded-lg"></div>
          </div>
          </div>

         <div data-aos="fade-up" data-aos-delay="1000">
             <div className="skill-card hover:scale-105 bg-gray-800 p-5 rounded-lg shadow-lg hover:drop-shadow-[0_0_10px_black] transition-all duration-200 relative overflow-hidden pl-[80px]">
            <FontAwesomeIcon className="text-orange-400 text-5xl absolute left-2 top-1/2 -translate-y-1/2" icon={faMobile} />
            <h3 className="text-2xl font-bold mb-1">Responsive Design</h3>
          <div className="absolute bottom-2.5 left-[80px] w-[80%] h-[10px] bg-violet-600 dark:bg-blue-400 rounded-lg"></div>
          </div>
         </div>

          <div data-aos="fade-up" data-aos-delay="1100">

              <div className="skill-card hover:scale-105 bg-gray-800 p-5 rounded-lg shadow-lg hover:drop-shadow-[0_0_10px_black] transition-all duration-200 relative overflow-hidden pl-[80px]">
            <Image src={typeScript} alt="typescript" className="w-12 h-12 absolute left-2 top-1/2 -translate-y-1/2" />
            <h3 className="text-2xl font-bold mb-1">TypeScript</h3>
          <div className="absolute bottom-2.5 left-[80px] w-[80%] h-[10px] bg-violet-600 dark:bg-blue-400 rounded-lg"></div>
          </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="1200" className="col-span-1 col-start-2">
            <div className="skill-card hover:scale-105 col-span-1 col-start-2 bg-gray-800 p-5 rounded-lg shadow-lg hover:drop-shadow-[0_0_10px_black] transition-all duration-200 relative overflow-hidden pl-[80px]">
            <FontAwesomeIcon className="text-white text-5xl absolute left-2 top-1/2 -translate-y-1/2" icon={faGithub} />
            <h3 className="text-2xl font-bold mb-1">Git & Github</h3>
          <div className="absolute bottom-2.5 left-[80px] w-[80%] h-[10px] bg-violet-600 dark:bg-blue-400 rounded-lg"></div></div>
        </div>
          </div>
      </div>

      {/* Projects */}
      <div className="relative container mx-auto min-h-screen py-20 px-6 md:px-20" id="projects">
        <div className="mb-8 text-center">
        <h2 className="inline-block text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary-300 via-primary-200 to-primary-50 bg-clip-text text-violet-500 dark:text-blue-400 drop-shadow-[0_0_14px_rgba(59,130,246,0.25)] relative after:absolute after:bottom-[-12px] after:left-0 after:w-full after:h-[6px] after:bg-violet-500 dark:after:bg-blue-400 after:rounded-md">My Projects</h2>

        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
        <p className="mx-auto mt-3 max-w-2xl text-black dark:text-white">Selected works focused on speed, accessibility, and clean UX.</p></div>
        <div className="flex flex-wrap justify-center gap-3 mb-10 *:cursor-pointer">
          <button className={`px-4 py-2 all rounded-full border transition-all duration-300  text-white ${activeTab === 'all' ? 'bg-black dark:bg-blue-400' : 'bg-gray-600/50 text-black/80'} border-gray-800/50 hover:bg-black dark:hover:bg-blue-500`} onClick={() => setActiveTab('all')}>All</button>
          <button className={`px-4 py-2 css&html rounded-full border transition-all duration-300 ${activeTab === 'css&html' ? 'bg-black dark:bg-blue-400' : 'bg-gray-600/50'} text-white border-gray-800/50 hover:bg-black dark:hover:bg-blue-500 hover:text-white`} onClick={() => setActiveTab('css&html')}>CSS &amp; HTML</button>
          <button className={`px-4 py-2 js rounded-full border transition-all duration-300 ${activeTab === 'js' ? 'bg-black dark:bg-blue-400' : 'bg-gray-600/50'} text-white border-gray-800/50 hover:bg-black dark:hover:bg-blue-500 hover:text-white`} onClick={() => setActiveTab('js')}>JavaScript</button>
          <button className={`px-4 py-2 react rounded-full border transition-all duration-300 ${activeTab === 'react' ? 'bg-black dark:bg-blue-400' : 'bg-gray-600/50'} text-white border-gray-800/50 hover:bg-black dark:hover:bg-blue-500 hover:text-white`} onClick={() => setActiveTab('react')}>React</button>
          <button className={`px-4 py-2 next rounded-full border transition-all duration-300 ${activeTab === 'next' ? 'bg-black dark:bg-blue-400' : 'bg-gray-600/50'} text-white border-gray-800/50 hover:bg-black dark:hover:bg-blue-500 hover:text-white`} onClick={() => setActiveTab('next')}>Next</button>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div data-aos="fade-up" data-aos-delay="0" className={`relative ${activeTab=== 'react'?'':activeTab==='all'?'':'hidden'} rounded-2xl border border-white/10 bg-white-5 dark:bg-black p-1 backdrop-blur-md shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_black] dark:hover:shadow-[0_0_34px_skyblue] aos-init`}>
            <div className={`group ${activeTab=== 'react'?'':activeTab==='all'?'':'hidden'} relative flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-[0_0_24px_rgba(59,130,246,0.08)   transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]`}>
            <div className="relative overflow-hidden">
              <Image alt="Fresh Cart preview"  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" src={freshCart}/>
              <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/10 transition-colors duration-300 cursor-pointer" onClick={() => window.open('https://e-commerce-tka6.vercel.app/','_blank')}></div></div>
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg md:text-xl font-semibold text-black/80 dark:text-blue-400">Fresh Cart</h3>
                <p className="mt-2 text-sm text-black/70 line-clamp-3 dark:text-white">FreshCart is a fast and modern online store for fresh groceries and essentials. Enjoy easy browsing, secure checkout, and quick delivery to your door.</p>
                <div className="mt-auto flex items-center gap-4 pt-4">
                  <a href="https://github.com/ahmedd-adel502/E-commerce" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-200 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> GitHub</a>
                  
                  <a href="https://e-commerce-tka6.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" className="svg-inline--fa fa-up-right-from-square fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"></path></svg> Live Demo</a></div></div></div></div>
                  
                  
                  
                  
                  
              <div data-aos="fade-up" data-aos-delay="100" className={`relative ${activeTab=== 'css&html'?'':activeTab==='all'?'':'hidden'} rounded-2xl border border-white/10 dark:bg-black bg-white/5 p-1 backdrop-blur-md shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_black] dark:hover:shadow-[0_0_34px_skyblue] aos-init`}>
               <div className={`group ${activeTab=== 'css&html'?'':activeTab==='all'?'':'hidden'} relative flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]`}>
                  <div className="relative overflow-hidden">
                    <Image alt="Fokir preview"  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" src={fokir}/>
                    <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300 cursor-pointer" onClick={() => window.open('https://ahmedd-adel502.github.io/fokir-task/','_blank')}></div></div>
                    <div className="flex flex-col flex-1 p-5">
                      <h3 className="text-lg md:text-xl font-semibold text-black/80 dark:text-blue-400">Fokir</h3>
                      <p className="mt-2 text-sm text-black/70 line-clamp-3 dark:text-white">Fokir is a fully responsive website designed with HTML, CSS, and Bootstrap. It offers a seamless user experience with a clean and modern design.</p>
                      <div className="mt-auto flex items-center gap-4 pt-4"><a href="https://github.com/ahmedd-adel502/fokir-task" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-200 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> GitHub</a>
                      
                      <a href="https://ahmedd-adel502.github.io/fokir-task/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" className="svg-inline--fa fa-up-right-from-square fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"></path></svg> Live Demo</a></div></div></div></div>
                      
                      
                      
                      
                      
              <div data-aos="fade-up" data-aos-delay="200" className={`relative ${activeTab=== 'css&html'?'':activeTab==='all'?'':'hidden'} rounded-2xl border border-white/10 dark:bg-black bg-white/5 p-1 backdrop-blur-md shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_black] dark:hover:shadow-[0_0_34px_skyblue] aos-init`}>    
              <div className={`group ${activeTab=== 'css&html'?'':activeTab==='all'?'':'hidden'} relative flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]`}>
                <div className="relative overflow-hidden">
                <Image alt="Devfolio preview"  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" src={DevFolio}/>
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300 cursor-pointer" onClick={() => window.open('https://ahmedd-adel502.github.io/Demo-task/','_blank')}></div></div>
               <div className="flex flex-col flex-1 p-5">
              <h3 className="text-lg md:text-xl font-semibold text-black/80 dark:text-blue-400">Devfolio</h3>
              <p className="mt-2 text-sm text-black/70 line-clamp-3 dark:text-white">Devfolio is a modern, responsive personal portfolio built using HTML, CSS, Bootstrap, and the Typed.js library.</p>
              <div className="mt-auto flex items-center gap-4 pt-4"><a href="https://github.com/ahmedd-adel502/Demo-task" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-200 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> GitHub</a>
              <a href="https://ahmedd-adel502.github.io/Demo-task/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" className="svg-inline--fa fa-up-right-from-square fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"></path></svg> Live Demo</a></div></div></div></div>
              
              
              
              <div data-aos="fade-up" data-aos-delay="300" className={`relative ${activeTab=== 'css&html'?'':activeTab==='all'?'':'hidden'} rounded-2xl border border-white/10 dark:bg-black bg-white/5 p-1 backdrop-blur-md shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_black] dark:hover:shadow-[0_0_34px_skyblue] aos-init`}>        
                <div className={`group ${activeTab=== 'css&html'?'':activeTab==='all'?'':'hidden'} relative flex flex-col h-full rounded-2xl border border-white/10  bg-white/5 backdrop-blur-md overflow-hidden shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]`}>
                <div className="relative overflow-hidden">
                  <Image alt="Daniels preview"  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" src={bootstrapTest}/>
                    <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300 cursor-pointer" onClick={() => window.open('https://ahmedd-adel502.github.io/BootStrap-test/','_blank')}></div></div>
                    <div className="flex flex-col flex-1 p-5">
                      <h3 className="text-lg md:text-xl font-semibold text-black/80 dark:text-blue-400">Daniels</h3>
                       <p className="mt-2 text-sm text-black/70 line-clamp-3 dark:text-white">A modern and responsive personal portfolio template designed for developers, freelancers, or creatives.</p>
                       <div className="mt-auto flex items-center gap-4 pt-4"><a href="https://github.com/ahmedd-adel502/BootStrap-test" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-200 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> GitHub</a><a href="https://ahmedd-adel502.github.io/BootStrap-test/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" className="svg-inline--fa fa-up-right-from-square fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"></path></svg> Live Demo</a></div></div></div></div>
                       
                       
                       
                       
                  <div data-aos="fade-up" data-aos-delay="400" className={`relative ${activeTab=== 'css&html'?'':activeTab==='all'?'':'hidden'} rounded-2xl border border-white/10 dark:bg-black bg-white/5 p-1 backdrop-blur-md shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_black] dark:hover:shadow-[0_0_34px_skyblue] aos-init`}>               
                    <div className={`group ${activeTab=== 'css&html'?'':activeTab==='all'?'':'hidden'} relative flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]`}>
                      <div className="relative overflow-hidden">
                       <Image alt="Bakery preview"  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" src={bakery}/>
                         <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300 cursor-pointer" onClick={() => window.open('https://ahmedd-adel502.github.io/Bakery/','_blank')}></div></div>
                       <div className="flex flex-col flex-1 p-5">
                           <h3 className="text-lg md:text-xl font-semibold text-black/80 dark:text-blue-400">Bakery</h3>
                           <p className="mt-2 text-sm text-black/70 line-clamp-3 dark:text-white">Bakery is a website built using HTML, CSS.</p>
                           <div className="mt-auto flex items-center gap-4 pt-4"><a href="https://github.com/ahmedd-adel502/Bakery" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-200 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> GitHub</a>
                           <a href="https://ahmedd-adel502.github.io/Bakery/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" className="svg-inline--fa fa-up-right-from-square fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"></path></svg> Live Demo</a></div></div></div></div>
                           
                           
                           
                           
                           <div data-aos="fade-up" data-aos-delay="500" className={`relative ${activeTab=== 'js'?'':activeTab==='all'?'':'hidden'} rounded-2xl border border-white/10 dark:bg-black bg-white/5 p-1 backdrop-blur-md shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_black] dark:hover:shadow-[0_0_34px_skyblue] aos-init`}>
                           <div className={`group ${activeTab=== 'js'?'':activeTab==='all'?'':'hidden'} relative flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]`}>
                        <div className="relative overflow-hidden">
                          <Image alt="Yummy preview"  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" src={yummy}/>
                            <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300 cursor-pointer" onClick={() => window.open('https://ahmedd-adel502.github.io/Yummy-Project/','_blank')}></div></div>
                             <div className="flex flex-col flex-1 p-5">
                              <h3 className="text-lg md:text-xl font-semibold text-black/80 dark:text-blue-400">Yummy</h3>
                             <p className="mt-2 text-sm text-black/70 line-clamp-3 dark:text-white">Yummy is a website that offers delicious and healthy recipes in a simple way.</p>
                               <div className="mt-auto flex items-center gap-4 pt-4"><a href="https://github.com/ahmedd-adel502/Yummy-Project" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-200 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> GitHub</a>
                               <a href="https://ahmedd-adel502.github.io/Yummy-Project/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" className="svg-inline--fa fa-up-right-from-square fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"></path></svg> Live Demo</a></div></div></div></div>
                               
                               
                               
                               
                  <div data-aos="fade-up" data-aos-delay="600" className={`relative ${activeTab=== 'js'?'':activeTab==='all'?'':'hidden'} rounded-2xl border border-white/10 dark:bg-black bg-white/5 p-1 backdrop-blur-md shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_black] dark:hover:shadow-[0_0_34px_skyblue] aos-init`}>        
                        <div className={`group ${activeTab=== 'js'?'':activeTab==='all'?'':'hidden'} relative flex flex-col h-full rounded-2xl border border-white/10  bg-white/5 backdrop-blur-md overflow-hidden shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]`}>
                       <div className="relative overflow-hidden">
                        <Image alt="Weather-app preview"  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" src={WeatherApp}/> <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300 cursor-pointer" onClick={() => window.open('https://ahmedd-adel502.github.io/WeatherApp/','_blank')}></div></div>
                        <div className="flex flex-col flex-1 p-5">
                          <h3 className="text-lg md:text-xl font-semibold text-black/80 dark:text-blue-400">Weather-app</h3>
                        <p className="mt-2 text-sm text-black/70 line-clamp-3 dark:text-white">Get accurate, real-time weather updates for any city worldwide.</p><div className="mt-auto flex items-center gap-4 pt-4"><a href="https://github.com/ahmedd-adel502/WeatherApp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-200 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> GitHub</a><a href="https://ahmedd-adel502.github.io/WeatherApp/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" className="svg-inline--fa fa-up-right-from-square fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"></path></svg> Live Demo</a></div></div></div></div>
                        
                        
                        
                  <div data-aos="fade-up" data-aos-delay="700" className={`relative ${activeTab=== 'css&html'?'':activeTab==='all'?'':'hidden'} rounded-2xl border border-white/10 dark:bg-black bg-white/5 p-1 backdrop-blur-md shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_black] dark:hover:shadow-[0_0_34px_skyblue] aos-init`}>
                                          
                       <div className={`group ${activeTab=== 'css&html'?'':activeTab==='all'?'':'hidden'} relative flex flex-col h-full rounded-2xl border border-white/10  bg-white/5 backdrop-blur-md overflow-hidden shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]`}>
                          <div className="relative overflow-hidden">
                            <Image alt="Mealify preview"  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" src={mealify}/>
                               <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300 cursor-pointer" onClick={() => window.open('https://ahmedd-adel502.github.io/Mealify-task/','_blank')}></div></div>
                                 <div className="flex flex-col flex-1 p-5">
                                 <h3 className="text-lg md:text-xl font-semibold text-black/80 dark:text-blue-400">Mealify</h3>
                                <p className="mt-2 text-sm text-black/70 line-clamp-3 dark:text-white">Mealify is a professional and responsive restaurant website built using HTML and CSS.</p><div className="mt-auto flex items-center gap-4 pt-4"><a href="https://github.com/ahmedd-adel502/Mealify-task" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-200 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> GitHub</a><a href="https://ahmedd-adel502.github.io/Mealify-task/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" className="svg-inline--fa fa-up-right-from-square fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"></path></svg> Live Demo</a></div></div></div></div>
                                
                                
                                
                                
                <div data-aos="fade-up" data-aos-delay="800" className={`relative ${activeTab=== 'react'?'':activeTab==='all'?'':'hidden'} rounded-2xl border border-white/10 dark:bg-black bg-white/5 p-1 backdrop-blur-md shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_black] dark:hover:shadow-[0_0_34px_skyblue] aos-init`}>                     
                      <div className={`group ${activeTab=== 'react'?'':activeTab==='all'?'':'hidden'} relative flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]`}>
                          <div className="relative overflow-hidden">
                            <Image alt="React Router preview"  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" src={FrameWork}/>
                              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300 cursor-pointer" onClick={() => window.open('https://framework-dun-three.vercel.app/','_blank')}></div></div>
                               <div className="flex flex-col flex-1 p-5">
                               <h3 className="text-lg md:text-xl font-semibold text-black/80 dark:text-blue-400">React Router</h3>
                               <p className="mt-2 text-sm text-black/70 line-clamp-3 dark:text-white">A React Router application created as a hands-on practice project to learn and improve routing skills in React.</p><div className="mt-auto flex items-center gap-4 pt-4"><a href="https://github.com/ahmedd-adel502/Framework" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-200 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> GitHub</a>
                               <a href="https://framework-dun-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" className="svg-inline--fa fa-up-right-from-square fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"></path></svg> Live Demo</a></div></div></div></div>
                               
                               
                               
                               
            <div data-aos="fade-up" data-aos-delay="900" className={`relative ${activeTab=== 'js'?'':activeTab==='all'?'':'hidden'} rounded-2xl border border-white/10 dark:bg-black bg-white/5 p-1 backdrop-blur-md shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_black] dark:hover:shadow-[0_0_34px_skyblue] aos-init`}>
                            
                      <div className={`group ${activeTab=== 'js'?'':activeTab==='all'?'':'hidden'} relative flex flex-col h-full rounded-2xl border border-white/10  bg-white/5 backdrop-blur-md overflow-hidden shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]`}>
                        <div className="relative overflow-hidden">
                          <Image alt="SmartLogin preview"  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" src={loginApp}/>
                      <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300 cursor-pointer" onClick={() => window.open('https://ahmedd-adel502.github.io/LoginApplication/','_blank')}></div></div>
                        <div className="flex flex-col flex-1 p-5">
                          <h3 className="text-lg md:text-xl font-semibold text-black/80 dark:text-blue-400">SmartLogin</h3>
                          <p className="mt-2 text-sm text-black/70 line-clamp-3 dark:text-white">A responsive login system built with HTML, CSS, and JavaScript.</p>
                          <div className="mt-auto flex items-center gap-4 pt-4"><a href="https://github.com/ahmedd-adel502/LoginApplication" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-200 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> GitHub</a>
                          <a href="https://ahmedd-adel502.github.io/LoginApplication/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" className="svg-inline--fa fa-up-right-from-square fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"></path></svg> Live Demo</a></div></div></div></div>
                          
                          
                          
                    <div data-aos="fade-up" data-aos-delay="1000" className={`relative ${activeTab=== 'js'?'':activeTab==='all'?'':'hidden'} rounded-2xl border border-white/10 dark:bg-black bg-white/5 p-1 backdrop-blur-md shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_black] dark:hover:shadow-[0_0_34px_skyblue] aos-init`}>
                        
                          <div className={`group ${activeTab=== 'js'?'':activeTab==='all'?'':'hidden'} relative flex flex-col h-full rounded-2xl border border-white/10  bg-white/5 backdrop-blur-md overflow-hidden shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]`}>
                              <div className="relative overflow-hidden">
                                <Image alt="Bookmarker preview"  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" src={bookMarker}/>
                                 <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300 cursor-pointer" onClick={() => window.open('https://ahmedd-adel502.github.io/JavascriptProjects/','_blank')}></div>
                               </div><div className="flex flex-col flex-1 p-5">
                             <h3 className="text-lg md:text-xl font-semibold text-black/80 dark:text-blue-400">Bookmarker</h3>
                            <p className="mt-2 text-sm text-black/70 line-clamp-3 dark:text-white">Bookmark Manager is a fast and responsive web app for saving and organizing your favorite websites.</p><div className="mt-auto flex items-center gap-4 pt-4"><a href="https://github.com/ahmedd-adel502/JavascriptProjects" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-200 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> GitHub</a>
                            <a href="https://ahmedd-adel502.github.io/JavascriptProjects/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" className="svg-inline--fa fa-up-right-from-square fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"></path></svg> Live Demo</a></div></div></div></div>
                      
                    <div data-aos="fade-up" data-aos-delay="1100" className={`relative  ${activeTab=== 'js'?'':activeTab==='all'?'':'hidden'} rounded-2xl border border-white/10 dark:bg-black bg-white/5 p-1 backdrop-blur-md shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_black] dark:hover:shadow-[0_0_34px_skyblue] aos-init`}>                          
                             <div className={`group ${activeTab=== 'js'?'':activeTab==='all'?'':'hidden'} relative flex flex-col h-full rounded-2xl border border-white/10  bg-white/5 backdrop-blur-md overflow-hidden shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]`}>
                                     <div className="relative overflow-hidden">
                                       <Image alt="Quotes Generator preview"  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" src={QuotesApp}/>
                                        <div className="absolute cursor-pointer inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300" onClick={() => window.open('https://ahmedd-adel502.github.io/Quotes-Task/','_blank')}></div></div>
                                        <div className="flex flex-col flex-1 p-5">
                                       <h3 className="text-lg md:text-xl font-semibold text-black/80 dark:text-blue-400">Quotes Generator</h3>
                                         <p className="mt-2 text-sm text-black/70 line-clamp-3 dark:text-white">Simple Quotes Generator is a clean and responsive web app that displays a random quote.</p><div className="mt-auto flex items-center gap-4 pt-4"><a href="https://github.com/ahmedd-adel502/Quotes-Task" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-200 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> GitHub</a>
                                         <a href="https://ahmedd-adel502.github.io/Quotes-Task/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors duration-300"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" className="svg-inline--fa fa-up-right-from-square fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"></path></svg> Live Demo</a></div>
                                            </div>
                                          </div>
                                         </div>
          </div>
        <div className="mt-8 text-center text-xs text-black/80 dark:text-white">* More projects available upon request.</div>
        </div>

        {/* Contact */}
        <div id="contact">
          <div className="container mx-auto min-h-[70vh] py-20 px-6">
            <div className="flex flex-col items-center justify-center">
                <div className="border-2 border-violet-500 dark:border-blue-400 rounded-md p-5 bg-gradient-to-r from-gray-400 to-violet-200 dark:from-blue-400 dark:to-violet-200 backdrop-blur-md shadow-lg w-[50%]">
                    <h2 className="text-3xl font-bold mb-4 text-center text-black/80">Get in Touch</h2>
                    <p className="mb-6 text-center text-black/70">I'm open to opportunities and collaborations. Feel free to reach out!</p>
                    <div className="flex flex-col ">
                        <label htmlFor="email" className="text-gray-800">Email</label>
                        <div className="flex items-center justify-between">
                          <a href="mailto:ahmeddadel502@gmail.com" id="email" className="cursor-pointer w-fit font-bold">ahmeddadel502@gmail.com</a>
                          <span id="copy" className=" text-black cursor-pointer border-2 border-violet-500 dark:border-blue-400 rounded-md px-2 py-1 hover:bg-violet-500 dark:hover:bg-blue-400 hover:text-white transition-all duration-300" onClick={() =>{
                            navigator.clipboard.writeText("ahmeddadel502@gmail.com");
                            document.getElementById('copy')!.innerText = 'Copied!';
                            setTimeout(() => {
                              document.getElementById('copy')!.innerText = 'Copy';
                            }, 3000);
                          } }>Copy</span>
                        </div>
                    </div>
                     <div className="flex flex-col ">
                        <label htmlFor="phone" className="text-gray-800">Phone</label>
                        <div className="flex items-center justify-between">
                          <a href="tel:01121989480" id="phone" className="cursor-pointer w-fit font-bold">01121989480</a>
                          <span id="whatsapp" className=" text-white font-bold cursor-pointer bg-green-600 hover:bg-green-700 hover:border-green-700 border-2 border-green-600 rounded-md px-2 py-1" onClick={() => window.open('https://wa.me/01121989480')}><FontAwesomeIcon className="size-5" icon={faWhatsapp} /> WhatsApp</span>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="location" className="text-gray-800">location</label>
                        <div className="flex items-center justify-between">
                          <span id="location" className=" w-fit font-bold">Cairo, Egypt</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  
  
  </>
}