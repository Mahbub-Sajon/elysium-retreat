import { SocialIcon } from 'react-social-icons'
import img from '../../assets/navbar/nav-img.png'
const Footer = () => {
    return (
        
                <footer className="footer flex justify-between align-middle items-center p-10 bg-[#234495] text-white">
                <nav>
                    <a className="link link-hover">HOME</a>
                    <a className="link link-hover">SERVICES</a>
                    <a className="link link-hover">OUR STORY</a>
                    <a className="link link-hover">CONTACT</a>
                </nav>
                <nav>
                    <a className="link link-hover">Lodging</a>
                    <a className="link link-hover">Restaurant</a>
                    <a className="link link-hover">Beach Activities</a>
                    <a className="link link-hover">St. Martin Island</a>
                </nav>
                <nav>
                    <div className="md:grid md:grid-flow-col md:gap-2">
                        <SocialIcon style={{ width: '30px', height: '30px' }} className="mr-4 my-2" url="https://www.facebook.com/" />
                        <SocialIcon style={{ width: '30px', height: '30px' }} className="mr-4 my-2" url="https://www.instagram.com/" />
                        <SocialIcon style={{ width: '30px', height: '30px' }} className="mr-4 my-2" url="https://www.tiktok.com/" />
                        <SocialIcon style={{ width: '30px', height: '30px' }} className="mr-4 my-2" url="https://www.youtube.com/" />
                        <SocialIcon style={{ width: '30px', height: '30px' }} className="mr-4 my-2" url="https://www.whatsapp.com/" />
                    </div>
                </nav>
                
                <img className='md:w-1/12 w-1/3' src={img} alt="" />
                
            </footer>
        
    );
};

export default Footer;