import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUser } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdAccessTimeFilled } from 'react-icons/md';
import { DiApple } from 'react-icons/di';
import { LuLanguages } from 'react-icons/lu';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import navbarLogo from './assets/images/navbar-logo.svg';
import appLogo from './assets/images/app-logo.svg';
import appStore from './assets/images/app-store.svg';
import googlePlay from './assets/images/google-play.png';
import restaurantInfo from './assets/js/restaurantInfo';
import createRestaurant from './assets/props/Restaurant';
// import MobileNav from './assets/components/MobileNav';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const [navbarScroll, setNavbarScroll] = useState(false);
  window.onscroll = () => {
    if (window.scrollY > 1) {
      setNavbarScroll(true);
      // console.log(window.scrollY, navbarScroll);
    } else {
      setNavbarScroll(false);
      // console.log(window.scrollY, navbarScroll);
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true
    });
  }, []);
  const [display, setDisplay] = useState(false);
  // const [displayNew, setDisplayNew]=useState(true)
  const changeDisplay = () => {
    setDisplay(!display)
    // console.log(display)
  }
  return (
    <div className='w-full h-full'>
      <div className={`w-full h-full bg-[#262626cc] z-50 overflow-hidden fixed transition-all ease-in-out duration-500 ${display ? 'left-0' : 'left-[-100%]'}`} onClick={changeDisplay}>
        <div className='py-7 px-6 w-8/12 h-full md:w-4/12 lg:w-3/12 xl:w-2/12 bg-white'>
          <div className='h-full flex justify-between flex-col'>
            <div>
              <a href='#' className='bg-black block text-center text-white w-full py-3 px-4  mb-2 text-[1.1rem] font-semibold border-0 rounded-lg transition-all ease-in-out duration-150 hover:bg-[#222]'>Sign Up</a>
              <a href='#' className='bg-[#EEEEEE] block text-center text-black w-full py-3 px-4 text-[1.1rem] font-semibold border-0 rounded-lg transition-all ease-in-out duration-150 hover:bg-[#d0cfcf]'>Log in</a>
              <div className='my-8 space-y-2 text-[.98rem] font-semibold'>
                <p>Create a business account</p>
                <p>Add your restaurant</p>
                <p>Sign up to deliver</p>
              </div>
            </div>
            <div className='mb-8'>
              <div className='flex justify-center items-center pb-8'>
                <img src={appLogo} alt="App-logo" className='w-3/12 mr-4' />
                <p className='text-base'>There’s more to love in the iPhone app.</p>
              </div>
              <a href="#" className='px-3 py-2 rounded-full font-medium text-sm bg-[#EEEEEE] transition-all duration-300 hover:bg-[#d8d7d7] '>
                <DiApple className='mr-2 text-xl inline -mt-1' />
                Get the app
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className={navbarScroll ? 'flex w-full justify-between fixed z-50 items-center bg-white border-b-[.2rem] px-4 py-3 md:px-[2rem] md:py-[1.5rem]' : 'hidden'} >
        <div className='hidden md:flex md:items-center'>
          <GiHamburgerMenu className='text-2xl mr-3 cursor-pointer md:mr-7 md:text-xl' onClick={changeDisplay} />
          <a href="">
            <img src={navbarLogo} alt="Navbar-Logo" className='ml-2 w-[110px] md:w-11/12' />
          </a>
        </div>
        <div className='w-full p-3 bg-[#EEEEEE] flex items-center animate-[spread_.8s_ease-in-out] md:p-4 md:w-5/12 md:hidden xl:flex'>
          <HiLocationMarker className='text-xl md:text-2xl' />
          <input type="text" placeholder='Enter delivery address' className='w-full bg-transparent ms-3 border-0 text-md font-[UberMoveRegular] outline-0 md:text-base' />
        </div>
        <div className='hidden md:flex md:items-center md:justify-center'>
          <a href='' className='bg-white p-2.5 w-[35px] h-[35px] flex items-center justify-center rounded-full drop-shadow-xl md:w-fit md:px-3.5 md:h-fit hover:bg-[#F6F6F6] hover:transition-all hover:duration-300'>
            <FaUser className='text-base' />
            <span className='ml-2 text-base hidden font-[UberMoveRegular] md:block'>Log in</span>
          </a>
          <a href='' className='bg-black text-white py-[.45rem] px-3.5 rounded-[30px] text-[.90rem] ml-4 drop-shadow-xl font-[UberMoveRegular] md:h-fit md:w-fit md:text-base md:px-5 md:py-[.60rem] hover:bg-[#3d3d3d] hover:transition-all hover:duration-300'>
            Sign up
          </a>
        </div>
      </div>
      <div className="w-full h-full bg-mobile-header-image bg-no-repeat bg-center bg-cover px-4 py-5 md:bg-header-image md:px-[2rem] lg:px-[3rem] md:py-[2rem]">
        <div className='w-full flex justify-between items-center'>
          <div className='flex items-center'>
            <GiHamburgerMenu className='text-2xl mr-3 cursor-pointer md:mr-7 md:text-xl' onClick={changeDisplay} />
            <a href="">
              <img src={navbarLogo} alt="Navbar-Logo" className='ml-2 w-[110px] md:w-11/12' />
            </a>
          </div>
          <div className='flex items-center justify-center'>
            <a href='' className='bg-white p-2.5 w-[35px] h-[35px] flex items-center justify-center rounded-full drop-shadow-xl md:w-fit md:px-3.5 md:h-fit hover:bg-[#F6F6F6] hover:transition-all hover:duration-300'>
              <FaUser className='text-base' />
              <span className='ml-2 text-base hidden font-[UberMoveRegular] md:block'>Log in</span>
            </a>
            <a href='' className='bg-black text-white py-[.45rem] px-3.5 rounded-[30px] text-[.90rem] ml-4 drop-shadow-xl font-[UberMoveRegular] md:h-fit md:w-fit md:text-base md:px-5 md:py-[.60rem] hover:bg-[#3d3d3d] hover:transition-all hover:duration-300'>
              Sign up
            </a>
          </div>
        </div>
        <div className='mt-12 md:my-[12rem]'>
          <h1 className='text-4xl font-bold font-[UberMoveBold] leading-tight mb-8 md:text-[3.4rem]'>Hungry? You’re in the right place</h1>
          <div className='md:flex'>
            <div className='w-100 h-14 bg-white flex items-center p-3 justify-between mb-2 md:w-3/6 lg:w-2/4 xl:w-1/3'>
              <HiLocationMarker className='text-xl w-1/12 md:text-2xl' />
              <input type="text" placeholder='Enter delivery address' className='w-11/12 ms-2 border-0 text-md font-[UberMoveRegular] outline-0 md:text-lg' />
            </div>
            <div className='w-100 h-14 bg-white flex items-center p-3 justify-between mb-4 md:w-48 lg:w-56 md:mx-2 md:mb-0 lg:mx-3'>
              <MdAccessTimeFilled className='text-xl w-1/12 md:text-2xl md:w-2/12' />
              <select name="" id="" className='w-11/12 ms-2 border-0 text-md font-[UberMoveRegular] outline-0 bg-transparent'>
                <option value="" selected disabled >Deliver Now</option>
                <option value="">Later</option>
                <option value="">Custom</option>
              </select>
            </div>
            <button className='w-full h-14 bg-black text-white rounded-lg font-[UberMoveRegular] p-3 text-lg md:w-[auto] md:px-3 xl:px-5 hover:bg-[#272b2e] hover:duration-300'>Search here</button>
          </div>
          <p className='mt-5'>Or<a href="#" className='underline px-1'>Sign In</a> to your account.</p>
        </div>
      </div>
      <div className='py-10 px-4 md:hidden'>
        <div className='flex justify-center items-center pb-5'>
          <img src={appLogo} alt="App-logo" className='w-2/12 mr-5' />
          <p className='text-2xl font-semibold leading-7'>There’s more to love in the iPhone app.</p>
        </div>
        <a href="#" className='flex justify-center items-center p-4 rounded-lg font-medium text-lg bg-[#EEEEEE] transition-all duration-300 hover:bg-[#d8d7d7] '>
          <DiApple className='mr-2 text-xl' />
          Get the app
        </a>
      </div>
      <div className='px-4 md:px-6 w-full flex flex-col font-[UberMoveRegular] md:flex md:flex-row md:space-x-5 md:py-[2.5rem]'>
        {restaurantInfo.map(createRestaurant)}
      </div>
      <div className='px-4 pb-8 md:px-6 md:pb-14'>
        <div className='flex justify-between items-center font-[UberMoveRegular] pb-5 md:pb-10'>
          <p className='text-2xl md:text-3xl'>Cities near me</p>
          <a href="#" className='underline text-sm md:text-base'>View all 500+ cities</a>
        </div>
        <div className='w-full'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198612.722664583!2d-100.96049503534239!3d38.47275079827201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87a31771717c016b%3A0x68c2b4a94b3e095f!2sKansas%2C%20USA!5e0!3m2!1sen!2sng!4v1694111402643!5m2!1sen!2sng" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div>
        <div className='flex justify-between items-center font-[UberMoveRegular] pb-5 px-4 md:px-6'>
          <p className='text-2xl md:text-3xl'>Countries with Uber Eats</p>
          <a href="#" className='underline hidden text-base md:block'>View all countries</a>
        </div>
        <div className='px-4 columns-2 space-y-5 font-[UberMoveLight] md:columns-4 md:px-6 md:mt-5 md:mb-20'>
          <p>Australia</p>
          <p>Belgium</p>
          <p>Canada</p>
          <p>Chile</p>
          <p>Costa Rica</p>
          <p>Dominican Republic</p>
          <p>Ecuador</p>
          <p>El Salvador</p>
          <p>France</p>
          <p>Germany</p>
          <p>Guatemala</p>
          <p>Ireland</p>
          <p>Italy</p>
          <p>Japan</p>
          <p>Kenya</p>
          <p>Mexico</p>
          <p>Netherlands</p>
          <p>New Zealand</p>
          <p>Panama</p>
          <p>Poland</p>
          <p>Portugal</p>
          <p>South Africa</p>
          <p>Spain</p>
          <p>Sri Lanka</p>
          <p>Sweden</p>
          <p>Switzerland</p>
          <p>Taiwan (ROC)</p>
          <p>United Kingdom</p>
          <p>United States</p>
        </div>
        <a href="#" className='underline block text-base px-4 py-10 mb-5 font-[UberMoveRegular] md:hidden '>View all countries</a>
      </div>
      <footer className='w-full px-4 border-t py-12 md:px-6 md:py-20 md:flex md:flex-row'>
        <div className='mb-16 w-full md:w-1/2 md:space-y-40'>
          <img src={navbarLogo} className='ml-2 w-30' alt="Navbar-Logo" />
          <div className='flex mt-10'>
            <img src={appStore} className='w-30 h-10' alt="App Store" />
            <img src={googlePlay} className='w-30 h-10 ms-5' alt="Google Play" />
          </div>
        </div>
        <div className='columns-2 space-y-5 w-full font-[UberMoveLight] md:w-1/2'>
          <a href="#" className='block hover:underline'>Get Help</a>
          <a href="#" className='block hover:underline'>Buy gift cards</a>
          <a href="#" className='block hover:underline'>Add your restaurant</a>
          <a href="#" className='block hover:underline'>Sign up to deliver</a>
          <a href="#" className='block hover:underline'>Create a business account</a>
          <a href="#" className='block hover:underline'>Promotions</a>
          <a href="#" className='block hover:underline'>View all cities</a>
          <a href="#" className='block hover:underline'>View all countries</a>
          <a href="#" className='block hover:underline'>Pickup near me</a>
          <a href="#" className='block hover:underline'>About Uber Eats</a>
          <a href="#" className='block hover:underline'>
            <LuLanguages className='inline me-1' /> English
          </a>
        </div>
      </footer>
      <subfooter className='w-full'>
        <div className='py-10 mx-5 border-t md:mx-10 md:py-12 xl:flex xl:justify-between xl:items-center'>
          <div className='text-lg flex md:items-center md:mb-8'>
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#" className='mx-4'>
              <BsTwitter />
            </a>
            <a href="#">
              <RiInstagramFill />
            </a>
          </div>
          <div>
            <div className='items-start space-y-3 text-[.95rem] flex flex-col font-[UberMoveLight] mt-10 md:space-x-8 md:flex-row md:space-y-0 xl:items-end xl:justify-end md:mt-0'>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
              <a href="#">Pricing</a>
              <a href="#">Do not sell or share my personal information</a>
            </div>
            <div className='space-y-3 text-[.95rem] flex flex-col font-[UberMoveLight] mt-3 xl:space-x-8 xl:flex-row xl:space-y-0 xl:items-end xl:justify-end xl:mt-5'>
              <p> This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
              <p>© 2023 Uber Technologies Inc</p>
            </div>
          </div>
        </div>
      </subfooter>
    </div>
  )
}
export default App
