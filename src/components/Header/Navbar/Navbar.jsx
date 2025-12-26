import React, { useEffect, useRef, useState } from 'react'
import logo from '../../../assets/image/logo.webp'
import { CiLocationOn } from 'react-icons/ci';
import { LuSearch } from 'react-icons/lu';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { BsCart4 } from 'react-icons/bs';
import { RiMenu2Line, RiUser6Line } from 'react-icons/ri';
import { TbSlashes } from 'react-icons/tb';
import { HiOutlineLanguage } from 'react-icons/hi2';
import {motion, AnimatePresence, easeIn } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome, FiSearch, FiUser } from 'react-icons/fi';
import { BiCart } from 'react-icons/bi';
import { IoMdMenu } from 'react-icons/io';
import { VscMenu } from 'react-icons/vsc';
import { SlBag } from 'react-icons/sl';
import { Menu, MENU_CONFIG } from './menuData';
import MainDrawer from './MainDrawer';
import SubMenuDrawer from './SubMenuDrawer';
import ItemListDrawer from './ItemListDrawer';




 




const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScroll, setIsScroll] = useState(false);
  const [showTopNav, setShowTopNav] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  const [itemListOpen, setItemListOpen] = useState(null);

  const lastScrollY = useRef(0);

  // if Mobile Drawer open , page not scrollable
  useEffect(() => {
    if (mobileMenuOpen || subMenuOpen || itemListOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen, subMenuOpen, itemListOpen]);

  // This Variabels Create for Mobile Drawers system.
  const closeAllDrawers = () => {
    setMobileMenuOpen(false);
    setSubMenuOpen(null);
    setItemListOpen(null);
  };
  const handleOpenSubMenu = (menuName) => {
    setSubMenuOpen(menuName);
    setMobileMenuOpen(false);
  };
  const handleOpenItemList = (menuName, columnTitle) => {
   setItemListOpen({ menuName, columnTitle});
  };
  const handleBackToSubMenu = () => {
    setItemListOpen(null);
  };
  const handleBackToMainMenu = () => {
    setSubMenuOpen(null);
    setMobileMenuOpen(true);
  };

// This useEffect for DeskTop devise Fixed Navigation.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
          setIsScroll(true);
      } else {
        setIsScroll(false)
      }
    };
     window.addEventListener('scroll', handleScroll);
     return () => {window.removeEventListener('scroll', handleScroll)};
  },[]);

// This useEffect for Mobile Top & Bottom Navigation.
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if ( currentScrollY > lastScrollY.current) {
        setShowTopNav(false)
        setShowBottomNav(true)
      } else{
        setShowTopNav(true)
        setShowBottomNav(false)
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

// This is Framer Motion logic.
  const dropdownVariants = {
    hidden: { opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.3 }},
    exit: {opacity: 0, y: 20, transition: {duration: 0.2 }}
  };


  return (
    <nav>
      {/* Desktop Nav Part */}
     <div className='bg-white hidden xl:flex backdrop-blur-3xl justify-center items-center shadow-sm w-full text-[#2f3542] z-50'>

      <div className=' cursor-pointer'>
        <img src={logo} alt="logo" />
       </div>

         <div className=''>
          {/* TopUtility Row */}
           <div className='items-center flex justify-center'>
             <div className='flex font-Poppins gap-8 p-8 pt-0  text-sm'>
                <div className='flex items-center border-l border-gray-300 p-2 cursor-pointer hover:text-black transition duration-300'>
                  <CiLocationOn size={20}/>location
                </div>

                <div className='border-l border-gray-300 p-4 flex items-center gap-1'>
                  <HiOutlineLanguage size={20}/><span className=' cursor-pointer  hover:text-black transition duration-300'>BN</span><TbSlashes/><span className=' cursor-pointer  hover:text-black transition duration-300'>EN</span>
                </div>

                <div className='pr-24 border-l border-gray-300 p-4 whitespace-nowrap  cursor-pointer  hover:text-black transition duration-300'>
                 Call support free:(+880 1234-567890)
                </div>
             </div>
              
            <div className='flex gap-2 p-8 pt-0'>
              <div className='border-l border-gray-300 p-2  cursor-pointer  hover:text-black transition duration-300'>
                <LuSearch size={22} className='font-semibold'/>
              </div>

              <div className='border-l border-gray-300 p-2  cursor-pointer  hover:text-black transition duration-300'>
                <RiUser6Line size={22} className='font-semibold'/>
              </div>

              <div className='border-l border-gray-300 p-2  cursor-pointer  hover:text-black transition duration-300'>
                <MdOutlineFavoriteBorder size={22} className='font-semibold'/>
              </div>

              <div className='border-l border-r border-gray-300 p-2  cursor-pointer'>
                <div className='relative'>
                <BsCart4 size={22} className='font-semibold'/>
                <div className="absolute -top-3 -right-2 h-5 w-5 rounded-full bg-[#2f3542] text-white text-xs flex items-center justify-center">
                  2
                </div>
                </div>
              </div>
            </div>
           </div>
 
           <div onMouseLeave={() => setActiveMenu(null)}>
           {/* Menu Row */}
           <div>
             <ul className='flex items-center text-md font-semibold justify-center gap-12 p-6 pt-0 font-Lato'>
              {Menu.map((item) => (
                <li key={item.id}  onMouseEnter={() => setActiveMenu(item.name)} className={`relative cursor-pointer ${activeMenu === item.name ? 'text-black' : "text-[#2f3542]"} group`}>
                <a href={item.link}> {item.name}
                    <span className='absolute left-0 -bottom-1 h-0.5 w-full bg-[#2f3542] scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left'/> </a>                 
                </li>
              ))}
             </ul>
           </div>

           {/* Menu Dropdown */}
           <AnimatePresence>
           {activeMenu && MENU_CONFIG[activeMenu] && (
            <motion.div className='absolute top-full left-0 w-full bg-white backdrop-blur-3xl font-Lato shadow-md p-6 flex justify-evenly gap-8 z-50'initial="hidden" animate="visible" exit="exit" variants={dropdownVariants}>
              {MENU_CONFIG[activeMenu].columns.map((col, idx) => (
                <div key={idx}>
                   <h4 className='font-semibold uppercase text-sm inline-block border-b border-gray-500 pb-0.5 mb-2'>
                     {col.title}
                   </h4>
                   <ul>
                    {col.items.map((item, index) => (
                      <li key={index} className='py-1'>
                        <a href={item.href} className='text-[#57534d] hover:text-black cursor-pointer'>
                       {item.label}
                        </a>
                      </li>
                    ))}
                   </ul>
                </div>
              ))}
            </motion.div>
           )}
           </AnimatePresence>
         </div>
          </div>   
        </div>

        {/* Fixed Nav Part */}

         <div className='hidden xl:flex z-50'>
        <motion.div className={`items-center w-full bg-white backdrop-blur-3xl shadow-2xs fixed top-0 z-50 ${isScroll ? 'flex' : 'hidden'}`} animate={{ y: isScroll ? 0 : -100 }} transition={{duration: 0.3}} >

         <div className='relative flex w-full justify-evenly'>
  
          <div>
            <img src={logo} alt="logo" className='h-20 cursor-pointer' />
          </div>

         <div onMouseLeave={() => setActiveMenu(null)}>
           {/* Menu Row */}
           <div>
             <ul className='flex items-center text-md font-semibold justify-center gap-12 p-8 font-Lato'>
              {Menu.map((item) => (
              <li key={item.id}  onMouseEnter={() => setActiveMenu(item.name)} className={`relative z-50 cursor-pointer ${activeMenu === item.name ? 'text-black' : "text-[#2f3542]"} group`}>
               <a href={item.link}>   {item.name}
                    <span className='absolute left-0 -bottom-1 h-0.5 w-full bg-[#2f3542] scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left'/>  </a>
                </li> 
              ))}
             </ul>
           </div>

           {/* Menu Dropdown */}
           <AnimatePresence>
           {activeMenu && MENU_CONFIG[activeMenu] && (
            <motion.div className='absolute top-full left-0 w-full bg-white backdrop-blur-3xl font-Lato shadow-md p-6 flex justify-evenly gap-8 z-50'initial="hidden" animate="visible" exit="exit" variants={dropdownVariants}>
              {MENU_CONFIG[activeMenu].columns.map((col, idx) => (
                <div key={idx}>
                   <h4 className='font-semibold uppercase text-sm inline-block border-b border-gray-500 pb-0.5 mb-2'>
                     {col.title}
                   </h4>
                   <ul>
                    {col.items.map((item, index) => (
                      <li key={index} className='py-1'>
                        <a href={item.href} className=' text-[#57534d] hover:text-black cursor-pointer'>
                       {item.label}
                        </a>
                      </li>
                    ))}
                   </ul>                  
                </div>
              ))}
            </motion.div>
           )}
           </AnimatePresence>
         </div>

            <div className='flex gap-2 p-6'>
              <div className='border-l border-gray-300 p-2 cursor-pointer hover:text-black transition duration-300'>
                <LuSearch size={22} className='font-semibold'/>
              </div>
              <div className='border-l border-r border-gray-300 p-2'>
                <div className='relative'>
                <BsCart4 size={22} className='font-semibold cursor-pointer'/>
                <div className="absolute -top-3 -right-2 h-5 w-5 rounded-full bg-[#2f3542] text-white text-xs flex items-center justify-center">
                  2
                </div>
                </div>
              </div>
            </div>
       </div>
         </motion.div>
         </div>

        {/* Mobile Nav Part */}

        {/* Mobile Top Nav */}
        <motion.div className='fixed top-0 flex xl:hidden bg-white backdrop-blur-3xl shadow-sm w-full text-[#2f3542] z-50' animate={{ y: showTopNav ? 0 : -100 }} transition={{ duration: 0.3 }}>

         <div className='flex items-center justify-between w-full bg-white px-5 py-1 md:py-2 md:px-12 lg:px-16 lg:py-4'>
          <div className='flex items-center gap-5 md:gap-8 lg:gap-11'>
           <div>
            <RiMenu2Line className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 cursor-pointer' onClick={() => setMobileMenuOpen(true)}/>
           </div>

           <div>
            <FiSearch className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8'/>
           </div>
          </div>
           
            <div>
              <img src={logo} alt="logo" className='h-12 sm:h-14 md:h-16 lg:h-18'/>
            </div>

            <div className='flex items-center gap-5 md:gap-7 lg:gap-10'>
            <div>
              <RiUser6Line className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8'/>
            </div>

            <div className='relative'>
              <BiCart className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8'/>
              <div className="absolute -top-2 -right-1 h-4 w-4 rounded-full bg-[#2f3542] text-white text-xs flex items-center justify-center">
                  2
              </div>
            </div>
            </div>

         </div>

        </motion.div>

        {/* Mobile Bottom Nav */}


       <motion.div className='flex md:hidden fixed bottom-0 bg-white backdrop-blur-3xl shadow-sm w-full text-[#2f3542] z-50' animate={{ y: showBottomNav ? 0 : 100 }} transition={{ duration: 0.3 }}>

         <div className='flex items-center justify-between w-full bg-white px-5 py-3 sm:px-8 sm:py-4'>

           <div className='flex flex-col items-center justify-center'>
           <FiHome className='h-6 w-6 sm:h-7 sm:w-7'/> <span className='font-Lato text-xs font-semibold'>Home</span>
           </div>

           <div className='flex flex-col items-center justify-center'onClick={() => setMobileMenuOpen(true)}>
           <VscMenu className='h-6 w-6 sm:h-7 sm:w-7'/> <span className='font-Lato text-xs font-semibold'>Menu</span>
           </div>

           <div className='flex flex-col items-center justify-center'>
           <LuSearch className='h-6 w-6 sm:h-7 sm:w-7'/> <span className='font-Lato text-xs font-semibold'>Search</span>
           </div>

            <div className='flex flex-col items-center justify-center relative'>
              <SlBag className='h-6 w-6 sm:h-7 sm:w-7'/><span className='font-Lato text-sm font-semibold'>Cart</span>
                 <div className="absolute top-1.5 sm:top-2 text-black text-xs font-bold flex items-center justify-center">
                  2
                </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <FiUser className='h-6 w-6 sm:h-7 sm:w-7'/><span className='font-Lato text-xs font-semibold'>Account</span>
            </div>

         </div>

        </motion.div>

        {/* Main Drawer of Mobile */}
           <MainDrawer
            isOpen={mobileMenuOpen}
            onClose={closeAllDrawers}
            onOpenSubMenu={handleOpenSubMenu}
            />

         {/* SubMenu Drawer of Mobile */}
                <SubMenuDrawer
                 isOpen={Boolean(subMenuOpen)}
                 menuName={subMenuOpen}
                 onClose={closeAllDrawers}
                 onBack={handleBackToMainMenu}
                 onOpenItemList={handleOpenItemList}
               />

         {/* Item List Drawer of Mobile */}
             <ItemListDrawer
                isOpen={Boolean(itemListOpen)}
                menuName={itemListOpen?.menuName}
                columnTitle={itemListOpen?.columnTitle}
                onClose={closeAllDrawers}
                onBack={handleBackToSubMenu}
              />


    </nav>
  )
}

export default Navbar
