import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import img from '../../assets/navbar/nav-img.png'


const Navbar = () => {
    const [open, setOpen] = useState(false);
  
    const menuItem = [
      { id: 1, label: "HOME", link: '/' },
      { id: 2, label: "SERVICES", link: '/' },
      { id: 3, label: "OUR STORY", link: '/' },
      { id: 4, label: "CONTACT", link: '/' },
    ]
  
    return (
      <div>
        <div className="fixed z-10 md:hidden ml-14 mt-2 text-white" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose/> : <GiHamburgerMenu/>}
        </div>
        <div className=" fixed z-10 flex justify-between items-center w-full md:pl-60 md:pr-60 pr-24 py-2 bg-gradient-to-r from-[#0a57d1] to-[#9ac3f2]">
         <div className=" hidden md:block">
        <a href="/"><img className="w-[6.25rem]" src={img} alt="" /></a>
         </div>
       <div>
        <div className="flex justify-end mb-5">
            <p className="mr-4 ">Hello</p>
            <p className="mr-4 ">Hello</p>
            <p className="mr-4 ">Hello</p>
            <p className="mr-4 ">Hello</p>
            <p className="mr-4 ">Hello</p>
        </div>
       <ul className={`text-white font-bold md:flex duration-500 ease-in absolute md:static   
        ${open ? 'top-5' : 'top-[-200px]'}`}>
         
        {menuItem.map((menu) => (
          <li key= {menu.id}>
            <a className=" flex" href={menu.link}> <span className="ml-14">{menu.label}</span> </a>
          </li>
        ))}
           
        </ul>
       </div>
        </div>
       
      </div>
    );
  };

export default Navbar;