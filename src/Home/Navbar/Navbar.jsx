import img from '../../assets/navbar/nav-img.png'
import { SocialIcon } from 'react-social-icons'

const Navbar = () => {

  const menuItem = [
    { id: 1, label: "HOME", link: '/' },
    { id: 2, label: "SERVICES", link: '/' },
    { id: 3, label: "OUR STORY", link: '/' },
    { id: 4, label: "CONTACT", link: '/' },
  ]

  return (
    <div>
      <div className="navbar  bg-gradient-to-r from-[#0a57d1] to-[#9ac3f2]">
        <div className="navbar-start">
          <div className=" hidden md:block">
            <a href="/"><img className="ml-32 w-[6.25rem]" src={img} alt="" /></a>
          </div>    
          <div className="md:hidden block dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {menuItem.map((menu) => (
                <li className='list-none' key={menu.id}>
                  <a className=" flex" href={menu.link}> <span className="ml-14">{menu.label}</span> </a>
                </li>))}
            </ul>
          </div>
        </div>
        <div>
        </div>
        <div className="navbar-center text-white">
          {menuItem.map((menu) => (
            <li className='list-none hidden md:block' key={menu.id}>
              <a className=" flex" href={menu.link}> <span className="ml-14">{menu.label}</span> </a>
            </li>))}
          </div>
          <div className="flex justify-end mb-16 text-2xl font-bold">
            <SocialIcon style={{width:'30px', height:'30px'}} className="mr-4" url="https://www.facebook.com/"/>
            <SocialIcon style={{width:'30px', height:'30px'}} className="mr-4" url="https://www.instagram.com/"/>
            <SocialIcon style={{width:'30px', height:'30px'}} className="mr-4" url="https://www.tiktok.com/"/>
            <SocialIcon style={{width:'30px', height:'30px'}} className="mr-4" url="https://www.youtube.com/"/>
            <SocialIcon style={{width:'30px', height:'30px'}} className="mr-4" url="https://www.whatsapp.com/"/>
         </div>
        </div>
      </div>
  );
};

export default Navbar;